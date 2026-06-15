export interface Plan {
	/** Nombre comercial del plan. */
	name: string;
	/** Precio numérico en USD, usado en el schema JSON-LD. */
	priceUsd: number;
	/** Precio listo para mostrar, ej. "USD 80". */
	priceLabel: string;
	/** Aclaración bajo el precio, ej. "1 usuario · 7 días de prueba". */
	detail: string;
	/** Plan destacado ("Más elegido"). */
	featured: boolean;
	/** Lista completa de features (home). */
	features: string[];
	/** Resumen en una línea (página de precios). */
	summary: string;
	/** Texto del botón. */
	cta: string;
	/** Etiqueta de tracking para el CTA en la home. */
	track: string;
}

export const plans: Plan[] = [
	{
		name: 'Tu negocio online',
		priceUsd: 0,
		priceLabel: 'USD 0',
		detail: 'Para siempre',
		featured: false,
		features: [
			'Web propia en subdominio',
			'Hasta 20 propiedades',
			'Botón de WhatsApp directo',
			'1 usuario',
			'Sello Hecho con Waichatt',
		],
		summary: 'Web propia en subdominio, hasta 20 propiedades, botón de WhatsApp directo y 1 usuario.',
		cta: 'Empezá gratis',
		track: 'Pricing free',
	},
	{
		name: 'Para quien trabaja solo',
		priceUsd: 80,
		priceLabel: 'USD 80',
		detail: '1 usuario · 7 días de prueba',
		featured: true,
		features: [
			'Dominio propio sin sello',
			'Propiedades ilimitadas',
			'Agente IA en WhatsApp',
			'CRM con pipeline',
			'Seguimientos masivos',
			'Soporte por chat',
		],
		summary: 'Propiedades ilimitadas, agente IA en WhatsApp, CRM con pipeline, seguimientos masivos y soporte por chat.',
		cta: 'Probar 7 días gratis',
		track: 'Pricing pro',
	},
	{
		name: 'Para equipos con vendedores',
		priceUsd: 180,
		priceLabel: 'USD 180',
		detail: '5 usuarios',
		featured: false,
		features: ['Todo lo del Pro', 'Asignación de leads por vendedor', 'Soporte prioritario', 'Onboarding asistido'],
		summary: '5 usuarios, asignación de leads por vendedor, soporte prioritario y onboarding asistido.',
		cta: 'Empezá gratis',
		track: 'Pricing team',
	},
];
