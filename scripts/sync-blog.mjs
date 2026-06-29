import { mkdir, readdir, readFile, unlink, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { MongoClient } from 'mongodb';

const root = process.cwd();
const contentDir = path.join(root, 'src/content/blog-generated');

const loadEnv = async (file) => {
	if (!existsSync(file)) return;
	const lines = (await readFile(file, 'utf8')).split(/\r?\n/);
	for (const line of lines) {
		const trimmed = line.trim();
		if (!trimmed || trimmed.startsWith('#') || !trimmed.includes('=')) continue;
		const [key, ...parts] = trimmed.split('=');
		if (process.env[key]) continue;
		process.env[key] = parts.join('=').replace(/^['"]|['"]$/g, '');
	}
};

if (process.env.BLOG_SYNC_ENV_FILE) {
	await loadEnv(path.resolve(root, process.env.BLOG_SYNC_ENV_FILE));
}
await loadEnv(path.join(root, '.env.local'));
await loadEnv(path.join(root, '.env'));

const uri = process.env.MONGODB_URI;
if (!uri) {
	throw new Error('Falta MONGODB_URI en el entorno de la landing.');
}

const dbName = process.env.MONGODB_DB || 'waichatt';
const collectionName = process.env.MONGODB_BLOGS_COLLECTION || 'blogs';
const includeDrafts = process.argv.includes('--include-drafts');

const yamlScalar = (value) => JSON.stringify(String(value ?? ''));

const yamlBlock = (key, value, indent = 0) => {
	const pad = '  '.repeat(indent);
	if (Array.isArray(value)) {
		if (!value.length) return [];
		return [
			`${pad}${key}:`,
			...value.flatMap((item) => {
				if (typeof item !== 'object' || item === null) return [`${pad}  - ${yamlScalar(item)}`];
				const entries = Object.entries(item).filter(([, entryValue]) => entryValue !== undefined && entryValue !== '');
				if (!entries.length) return [];
				const [first, ...rest] = entries;
				return [
					`${pad}  - ${first[0]}: ${yamlScalar(first[1])}`,
					...rest.flatMap(([entryKey, entryValue]) => yamlBlock(entryKey, entryValue, indent + 2)),
				];
			}),
		];
	}
	if (typeof value === 'object' && value !== null) {
		const lines = Object.entries(value)
			.filter(([, entryValue]) => entryValue !== undefined && entryValue !== '')
			.flatMap(([entryKey, entryValue]) => yamlBlock(entryKey, entryValue, indent + 1));
		return lines.length ? [`${pad}${key}:`, ...lines] : [];
	}
	if (typeof value === 'boolean') return [`${pad}${key}: ${value}`];
	if (value === undefined || value === '') return [];
	return [`${pad}${key}: ${yamlScalar(value)}`];
};

const toDate = (value) => {
	if (!value) return '';
	const date = value instanceof Date ? value : new Date(value);
	return Number.isNaN(date.getTime()) ? '' : date.toISOString().slice(0, 10);
};

const toSlug = (value) => {
	const slug = String(value ?? '').trim().replace(/^\/+|\/+$/g, '');
	if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return '';
	return slug;
};

const toMarkdown = (post) => {
	const slug = toSlug(post.slug);
	const publishDate = toDate(post.publishDate);
	if (!slug || !post.title || !post.description || !publishDate) return null;

	const frontmatter = {
		title: post.title,
		description: post.description,
		publishDate,
		updatedDate: toDate(post.updatedDate),
		tags: Array.isArray(post.tags) ? post.tags.filter(Boolean) : [],
		draft: Boolean(post.draft),
		image: typeof post.image === 'string' ? post.image : '',
		author: post.author,
		howTo: post.howTo,
		faqs: post.faqs,
	};

	const yaml = Object.entries(frontmatter).flatMap(([key, value]) => yamlBlock(key, value));
	const body = String(post.body ?? '').trim();

	return {
		slug,
		content: `---\n${yaml.join('\n')}\n---\n\n${body}\n`,
	};
};

const siteUrl = (process.env.PUBLIC_SITE_URL || 'https://waichatt.com').replace(/\/+$/, '');

// Reescribe solo la sección "## Artículos del blog" de public/llms.txt con los posts
// publicados, para que no quede desincronizada cuando Mongo agrega o quita un artículo.
// El resto del archivo (páginas, legal, contacto) se mantiene manual.
const syncLlmsTxt = async (kept) => {
	const llmsPath = path.join(root, 'public/llms.txt');
	const original = await readFile(llmsPath, 'utf8').catch(() => null);
	if (original === null) return;

	const marker = '## Artículos del blog';
	const start = original.indexOf(marker);
	const next = original.indexOf('\n## ', start + marker.length);
	if (start === -1 || next === -1) {
		console.warn('llms.txt: no se encontró la sección de artículos; se deja sin tocar.');
		return;
	}

	const items = [...kept.entries()].map(
		([slug, { title, description }]) => `- [${title}](${siteUrl}/blog/${slug}/): ${description}`,
	);
	const block = `${marker}\n\n${items.join('\n')}\n\n`;
	const updated = original.slice(0, start) + block + original.slice(next + 1);
	if (updated !== original) await writeFile(llmsPath, updated);
};

const client = new MongoClient(uri);
await client.connect();

try {
	const posts = await client
		.db(dbName)
		.collection(collectionName)
		.find(includeDrafts ? {} : { draft: { $ne: true } })
		.project({
			slug: 1,
			title: 1,
			description: 1,
			publishDate: 1,
			updatedDate: 1,
			tags: 1,
			draft: 1,
			image: 1,
			author: 1,
			howTo: 1,
			faqs: 1,
			body: 1,
			createdAt: 1,
		})
		.sort({ publishDate: -1, createdAt: -1 })
		.toArray();

	await mkdir(contentDir, { recursive: true });

	let written = 0;
	let unchanged = 0;
	let skipped = 0;
	const kept = new Map(); // slug -> { title, description } para llms.txt
	for (const post of posts) {
		const markdown = toMarkdown(post);
		if (!markdown) {
			skipped += 1;
			console.warn(`Saltado: ${post.slug ?? post._id} no cumple slug/title/description/publishDate.`);
			continue;
		}

		kept.set(markdown.slug, { title: post.title, description: post.description });
		const file = path.join(contentDir, `${markdown.slug}.md`);
		const current = await readFile(file, 'utf8').catch((error) => {
			if (error?.code === 'ENOENT') return null;
			throw error;
		});
		if (current === markdown.content) {
			unchanged += 1;
			continue;
		}
		await writeFile(file, markdown.content);
		written += 1;
	}

	// Prune: borra .md locales de posts que ya no están publicados en Mongo
	// (borrados o pasados a draft), si no seguirían vivos e indexables.
	let pruned = 0;
	for (const entry of await readdir(contentDir)) {
		if (!entry.endsWith('.md')) continue;
		if (kept.has(entry.slice(0, -3))) continue;
		await unlink(path.join(contentDir, entry));
		pruned += 1;
	}

	await syncLlmsTxt(kept);

	console.log(`Blog sync listo: ${written} escritos, ${unchanged} sin cambios, ${pruned} borrados, ${skipped} saltados.`);
} finally {
	await client.close();
}
