import type { CollectionEntry } from 'astro:content';
import { faqs } from './faqs';
import { plans } from './plans';
import { site } from './site';

const absoluteUrl = (path: string) => new URL(path, site.url).toString();

const publisherOrg = {
	'@type': 'Organization',
	name: site.name,
	url: site.url,
	logo: {
		'@type': 'ImageObject',
		url: absoluteUrl('/favicon.svg'),
	},
};

export const organizationSchema = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	name: site.name,
	url: site.url,
	logo: absoluteUrl('/favicon.svg'),
	email: site.contact.email,
	contactPoint: {
		'@type': 'ContactPoint',
		contactType: 'customer support',
		email: site.contact.email,
		telephone: site.contact.phone,
		areaServed: 'AR',
		availableLanguage: 'es',
	},
};

export const softwareApplicationSchema = {
	'@context': 'https://schema.org',
	'@type': 'SoftwareApplication',
	name: site.name,
	applicationCategory: 'BusinessApplication',
	operatingSystem: 'Web',
	url: site.url,
	image: absoluteUrl(site.ogImage),
	description: site.defaultDescription,
	offers: plans.map((plan) => ({
		'@type': 'Offer',
		name: plan.name,
		price: String(plan.priceUsd),
		priceCurrency: 'USD',
	})),
	provider: {
		'@type': 'Organization',
		name: site.name,
		url: site.url,
	},
};

// Preguntas frecuentes (rich results: acordeón de FAQ en buscadores).
export const faqSchema = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	mainEntity: faqs.map((faq) => ({
		'@type': 'Question',
		name: faq.question,
		acceptedAnswer: {
			'@type': 'Answer',
			text: faq.answer,
		},
	})),
};

// Datos estructurados de un artículo del blog (rich results: fecha, autor, etc.).
export const blogPostingSchema = (post: CollectionEntry<'blog'>, path: string) => {
	const url = absoluteUrl(path);
	const published = post.data.publishDate.toISOString();
	const modified = (post.data.updatedDate ?? post.data.publishDate).toISOString();

	return {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: post.data.title,
		description: post.data.description,
		datePublished: published,
		dateModified: modified,
		...(post.data.tags.length > 0 ? { keywords: post.data.tags.join(', ') } : {}),
		image: absoluteUrl(site.ogImage),
		url,
		mainEntityOfPage: { '@type': 'WebPage', '@id': url },
		inLanguage: 'es-AR',
		author: publisherOrg,
		publisher: publisherOrg,
	};
};

// Migas de pan (breadcrumbs) para que Google muestre la jerarquía del sitio.
export const breadcrumbSchema = (items: ReadonlyArray<{ name: string; path: string }>) => ({
	'@context': 'https://schema.org',
	'@type': 'BreadcrumbList',
	itemListElement: items.map((item, index) => ({
		'@type': 'ListItem',
		position: index + 1,
		name: item.name,
		item: absoluteUrl(item.path),
	})),
});
