import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
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
