export const site = {
	name: 'Waichatt',
	defaultTitle: 'Waichatt - Tu WhatsApp inmobiliario atiende solo con IA',
	defaultDescription:
		'Centralizá las consultas de WhatsApp, respondelas con IA y convertilas en leads organizados. CRM para inmobiliarias y desarrolladoras. Empezá gratis.',
	themeColor: '#259A72',
	links: {
		home: '/',
		app: 'https://waichatt.app',
		register: 'https://waichatt.app/register',
		blog: '/blog',
	},
} as const;

export const mainNavItems = [
	{ label: 'Funciones', href: '#funciones' },
	{ label: 'Precios', href: '#precios' },
	{ label: 'Blog', href: site.links.blog },
] as const;
