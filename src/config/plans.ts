export interface Plan {
	/** Nombre comercial del plan. */
	name: string;
	/** Precio numérico en USD, usado en el schema JSON-LD. */
	priceUsd: number;
	/** Precio listo para mostrar, ej. "USD 80". */
	priceLabel: string;
	/** Aclaración bajo el precio, ej. "5 usuarios · 5 días de prueba". */
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
		name: 'Plan Pro',
		priceUsd: 180,
		priceLabel: 'USD 180',
		detail: '5 días de prueba',
		featured: true,
		features: [
			'Propiedades ilimitadas',
			'Agente IA en WhatsApp',
			'CRM con pipeline',
			'Usuarios ilimitados',
			'Seguimientos masivos',
			'Asignación de leads por vendedor',
			'Soporte prioritario',
			'Onboarding asistido',
		],
		summary:
			'Propiedades ilimitadas, agente IA en WhatsApp, CRM con pipeline, seguimientos masivos, asignación de leads por vendedor, soporte prioritario y onboarding asistido.',
		cta: 'Probar 5 días gratis',
		track: 'Pricing pro',
	},
];
