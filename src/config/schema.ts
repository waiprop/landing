import { plans } from './plans';
import { site } from './site';

const absoluteUrl = (path: string) => new URL(path, site.url).toString();

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
