// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

const site = process.env.PUBLIC_SITE_URL ?? 'https://waichatt.com';

// https://astro.build/config
export default defineConfig({
	site,
	trailingSlash: 'always',
	integrations: [
		sitemap(),
		icon({
			include: {
				logos: ['whatsapp-icon', 'meta-icon', 'google-calendar'],
				'simple-icons': ['whatsapp', 'meta'],
			},
		}),
	],
});
