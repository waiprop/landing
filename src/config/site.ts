export const site = {
	name: 'Waichatt',
	url: 'https://waichatt.com',
	defaultTitle: 'Waichatt - Tu WhatsApp inmobiliario atiende solo con IA',
	defaultDescription:
		'Centraliza las consultas de WhatsApp, respóndelas con IA y conviértelas en leads organizados. CRM para inmobiliarias y desarrolladoras. Empieza gratis.',
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
		about: '/nosotros/',
	},
	// Perfiles oficiales: se exponen como `sameAs` en el schema para que los
	// buscadores y la IA reconozcan a Waichatt como una entidad real.
	social: [
		'https://www.linkedin.com/company/waichatt',
		'https://www.instagram.com/waichatt/',
		'https://www.facebook.com/profile.php?id=61575818510400',
		'https://www.youtube.com/@Waichatt',
	],
	// Sede (señal de entidad local para buscadores e IA).
	location: {
		street: 'Corrientes 983',
		locality: 'San Miguel de Tucumán',
		region: 'Tucumán',
		country: 'AR',
	},
	// Autor por defecto de los artículos (E-E-A-T: la IA pondera autores con nombre).
	// ponytail: contenido comercial → autor del equipo comercial; cada post puede
	// sobrescribirlo con `author` en su frontmatter.
	defaultAuthor: {
		name: 'Raúl Morales',
		role: 'CEO de Waichatt',
		url: 'https://www.linkedin.com/in/raul-morales-1ba27b1b4/',
		bio: 'Cofundador y CEO de Waichatt, plataforma de CRM con IA para inmobiliarias y desarrolladoras. Escribe sobre WhatsApp, inteligencia artificial y ventas inmobiliarias.',
	},
} as const;

export type Author = { name: string; role?: string; url?: string; bio?: string };

export const mainNavItems = [
	{ label: 'Funciones', href: '/#funciones' },
	{ label: 'Precios', href: site.links.pricing },
	{ label: 'Blog', href: site.links.blog },
] as const;
