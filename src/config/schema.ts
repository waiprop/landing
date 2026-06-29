import type { CollectionEntry } from 'astro:content';
import { faqs, type Faq } from './faqs';
import { plans } from './plans';
import { site, type Author } from './site';
import { team } from './team';

const absoluteUrl = (path: string) => new URL(path, site.url).toString();

const publisherOrg = {
	'@type': 'Organization',
	name: site.name,
	url: site.url,
	logo: {
		'@type': 'ImageObject',
		url: absoluteUrl('/icon_512.png'),
	},
	sameAs: site.social,
};

export const organizationSchema = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	name: site.name,
	url: site.url,
	logo: {
		'@type': 'ImageObject',
		url: absoluteUrl('/icon_512.png'),
	},
	description: site.defaultDescription,
	slogan: 'Tu WhatsApp inmobiliario atiende solo con IA',
	foundingDate: '2025-04-03',
	email: site.contact.email,
	// Mercados servidos y temas de la entidad: ayudan a la IA a asociar Waichatt
	// con consultas de su categoría en España y LATAM.
	areaServed: ['ES', 'AR', 'MX', 'CO', 'CL'],
	knowsAbout: [
		'CRM inmobiliario',
		'WhatsApp Business API',
		'Inteligencia artificial para ventas inmobiliarias',
		'Gestión y calificación de leads',
		'Automatización de atención por WhatsApp',
	],
	// sameAs: vincula la entidad con sus perfiles oficiales (clave para que la IA
	// la reconozca como marca real). Las URLs viven en site.social.
	sameAs: site.social,
	address: {
		'@type': 'PostalAddress',
		streetAddress: site.location.street,
		addressLocality: site.location.locality,
		addressRegion: site.location.region,
		addressCountry: site.location.country,
	},
	// Fundadores con su perfil de LinkedIn: refuerza E-E-A-T y la red de entidad.
	founder: team.map((member) => ({
		'@type': 'Person',
		name: member.name,
		jobTitle: member.role,
		sameAs: [member.linkedin],
	})),
	contactPoint: {
		'@type': 'ContactPoint',
		contactType: 'customer support',
		email: site.contact.email,
		telephone: site.contact.phone,
		areaServed: 'AR',
		availableLanguage: 'es',
	},
};

// Entidad del sitio. Refuerza la marca y declara el idioma.
// ponytail: sin SearchAction porque el sitio no tiene buscador interno; agregarlo
// apuntando a una búsqueda inexistente sería schema inválido.
export const websiteSchema = {
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	name: site.name,
	url: site.url,
	inLanguage: 'es',
	publisher: { '@type': 'Organization', name: site.name, url: site.url },
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
	featureList: [
		'Gestión de conversaciones y leads inmobiliarios',
		'Agente de inteligencia artificial configurable',
		'Sincronización opcional de visitas y citas con Google Calendar',
	],
	offers: plans.map((plan) => ({
		'@type': 'Offer',
		name: plan.name,
		price: String(plan.priceUsd),
		priceCurrency: 'USD',
		url: absoluteUrl(site.links.pricing),
		availability: 'https://schema.org/InStock',
	})),
	provider: {
		'@type': 'Organization',
		name: site.name,
		url: site.url,
	},
};

// Preguntas frecuentes (rich results: acordeón de FAQ en buscadores).
// Recibe la lista de FAQ visible en la página para que el schema coincida con el
// contenido (requisito de Google). Por defecto usa las de la home.
export const faqSchema = (items: Faq[] = faqs) => ({
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	mainEntity: items.map((faq) => ({
		'@type': 'Question',
		name: faq.question,
		acceptedAnswer: {
			'@type': 'Answer',
			text: faq.answer,
		},
	})),
});

// Datos estructurados de un artículo del blog (rich results: fecha, autor, etc.).
export const blogPostingSchema = (post: CollectionEntry<'blog'>, path: string) => {
	const url = absoluteUrl(path);
	const published = post.data.publishDate.toISOString();
	const modified = (post.data.updatedDate ?? post.data.publishDate).toISOString();
	// Autor con nombre (Person) en vez de la organización: la IA y Google ponderan
	// más el contenido firmado por una persona. Cae al autor por defecto del sitio.
	const writer: Author = post.data.author ?? site.defaultAuthor;
	const author = {
		'@type': 'Person',
		name: writer.name,
		...(writer.role ? { jobTitle: writer.role } : {}),
		...(writer.url ? { url: writer.url } : {}),
		...(writer.url ? { sameAs: [writer.url] } : {}),
		...(writer.bio ? { description: writer.bio } : {}),
		worksFor: { '@type': 'Organization', name: site.name, url: site.url },
		knowsAbout: ['CRM inmobiliario', 'WhatsApp para inmobiliarias', 'Inteligencia artificial aplicada a ventas'],
	};

	return {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: post.data.title,
		description: post.data.description,
		datePublished: published,
		dateModified: modified,
		...(post.data.tags.length > 0 ? { keywords: post.data.tags.join(', ') } : {}),
		image: post.data.image || absoluteUrl(site.ogImage),
		url,
		mainEntityOfPage: { '@type': 'WebPage', '@id': url },
		inLanguage: 'es',
		speakable: {
			'@type': 'SpeakableSpecification',
			cssSelector: ['.description', '.content p:first-of-type'],
		},
		author,
		publisher: publisherOrg,
	};
};

// Servicio por segmento (páginas de audiencia). Describe la oferta para un
// público concreto; ayuda a la IA a asociar Waichatt con consultas tipo
// "CRM para inmobiliarias" / "software para desarrolladoras".
export const serviceSchema = (input: {
	name: string;
	description: string;
	audienceType: string;
	path: string;
}) => ({
	'@context': 'https://schema.org',
	'@type': 'Service',
	name: input.name,
	description: input.description,
	serviceType: 'CRM inmobiliario con inteligencia artificial',
	url: absoluteUrl(input.path),
	provider: { '@type': 'Organization', name: site.name, url: site.url },
	areaServed: ['ES', 'AR', 'MX', 'CO', 'CL'],
	audience: { '@type': 'Audience', audienceType: input.audienceType },
});

// Guía paso a paso (rich results: HowTo). Reutiliza los pasos visibles en la home
// para que el schema coincida con el contenido. La IA y las AI Overviews citan
// mucho este tipo de contenido procedimental.
export const howToSchema = (input: { name: string; steps: ReadonlyArray<{ title: string; desc: string }> }) => ({
	'@context': 'https://schema.org',
	'@type': 'HowTo',
	name: input.name,
	step: input.steps.map((step, index) => ({
		'@type': 'HowToStep',
		position: index + 1,
		name: step.title,
		text: step.desc,
	})),
});

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
