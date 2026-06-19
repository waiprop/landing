export const site = {
	name: 'Waichatt',
	url: 'https://waichatt.com',
	defaultTitle: 'Waichatt - Tu WhatsApp inmobiliario atiende solo con IA',
	defaultDescription:
		'Centralizá las consultas de WhatsApp, respondelas con IA y convertilas en leads organizados. CRM para inmobiliarias y desarrolladoras. Empezá gratis.',
	themeColor: '#259A72',
	ogImage: '/og-waichatt.png',
	contact: {
		email: 'equipo@waichatt.com',
		phone: '+54 381 681 4079',
		whatsapp: 'https://wa.me/+5493816814079',
	},
	links: {
		home: '/',
		app: 'https://waichatt.app',
		register: 'https://waichatt.app/register',
		blog: '/blog/',
		pricing: '/precios/',
		realEstate: '/para-inmobiliarias/',
		developers: '/para-desarrolladoras/',
		privacy: '/politica-de-privacidad/',
		terms: '/terminos-y-condiciones/',
	},
} as const;

export const mainNavItems = [
	{ label: 'Funciones', href: '/#funciones' },
	{ label: 'Precios', href: site.links.pricing },
	{ label: 'Blog', href: site.links.blog },
] as const;
