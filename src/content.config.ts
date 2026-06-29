import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog-generated' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
		// Imagen de portada (URL absoluta). Se muestra en el artículo y se usa como
		// og:image y BlogPosting.image. z.string() laxo a propósito: una URL inválida
		// no debe romper el build de toda la colección; el CMS ya valida que sea http(s).
		image: z.string().optional(),
		// Autor del artículo. Si se omite, usa site.defaultAuthor.
		author: z
			.object({
				name: z.string(),
				role: z.string().optional(),
				url: z.url().optional(),
				bio: z.string().optional(),
			})
			.optional(),
		// Pasos visibles del artículo que también pueden emitirse como HowTo.
		howTo: z
			.object({
				name: z.string(),
				steps: z.array(
					z.object({
						title: z.string(),
						desc: z.string(),
					}),
				),
			})
			.optional(),
		// FAQ del artículo: se renderiza visible y emite schema FAQPage (citabilidad GEO).
		faqs: z
			.array(
				z.object({
					tag: z.string(),
					question: z.string(),
					answer: z.string(),
				}),
			)
			.optional(),
	}),
});

export const collections = { blog };
