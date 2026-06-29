// @ts-check
import { readdirSync, readFileSync } from 'node:fs';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

const site = process.env.PUBLIC_SITE_URL ?? 'https://waichatt.com';

// lastmod del sitemap para los posts: lee updatedDate (o publishDate) del frontmatter
// ya generado por `sync:blog`. Sin posts generados, queda vacío y el sitemap omite lastmod.
const blogDir = new URL('./src/content/blog-generated/', import.meta.url);
const lastmodByPath = {};
try {
	for (const file of readdirSync(blogDir)) {
		if (!file.endsWith('.md')) continue;
		const fm = readFileSync(new URL(file, blogDir), 'utf8');
		const date = (fm.match(/^updatedDate:\s*"?([\d-]+)/m) ?? fm.match(/^publishDate:\s*"?([\d-]+)/m))?.[1];
		if (date) lastmodByPath[`/blog/${file.slice(0, -3)}/`] = new Date(date).toISOString();
	}
} catch {
	// sin contenido generado todavía: sitemap sin lastmod.
}

// https://astro.build/config
export default defineConfig({
	site,
	trailingSlash: 'always',
	integrations: [
		sitemap({
			serialize(item) {
				const lastmod = lastmodByPath[new URL(item.url).pathname];
				return lastmod ? { ...item, lastmod } : item;
			},
		}),
		icon({
			include: {
				logos: ['whatsapp-icon', 'meta-icon', 'google-calendar'],
				'simple-icons': ['whatsapp', 'meta'],
			},
		}),
	],
});
