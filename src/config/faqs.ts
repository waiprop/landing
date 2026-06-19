export interface Faq {
	/** Etiqueta de categoría que se muestra sobre la pregunta. */
	tag: string;
	/** Pregunta visible y usada como `name` en el schema FAQPage. */
	question: string;
	/** Respuesta visible y usada como `acceptedAnswer` en el schema FAQPage. */
	answer: string;
}

export const faqs: Faq[] = [
	{
		tag: 'Plataforma',
		question: '¿Waichatt es un CRM o solo un bot de WhatsApp?',
		answer: 'Es una plataforma CRM completa: conversaciones por WhatsApp, gestión de leads, propiedades, visitas, equipo, reportes y un agente IA configurable.',
	},
	{
		tag: 'Agente IA',
		question: '¿La IA puede recomendar propiedades?',
		answer: 'Sí. Interpreta zona, presupuesto, tipo de operación y preferencias para sugerir propiedades de tu cartera.',
	},
	{
		tag: 'Control',
		question: '¿Puedo apagar la IA en una conversación?',
		answer: 'Sí. Cada chat puede tener el agente activado o pausado, para que tu equipo tome el control cuando quiera.',
	},
	{
		tag: 'Operación',
		question: '¿Sirve para ventas y alquileres?',
		answer: 'Sí. Gestionás propiedades en venta, alquiler o temporal, y seguís cada oportunidad desde el primer contacto hasta la negociación.',
	},
	{
		tag: 'Integraciones',
		question: '¿Se puede importar desde Tokko Broker?',
		answer: 'Sí. Importación y sincronización de propiedades vía API.',
	},
	{
		tag: 'Sitio web',
		question: '¿Incluye una web para mi negocio?',
		answer: 'Sí. Un sitio propio que se actualiza solo con tu cartera de propiedades.',
	},
	{
		tag: 'Prueba',
		question: '¿Ofrecen prueba gratis?',
		answer: 'Sí. El plan tiene 5 días de prueba gratis, sin tarjeta.',
	},
	{
		tag: 'Precio',
		question: '¿Hay costos ocultos?',
		answer: 'No. El precio es claro desde el inicio. Incluye un límite mensual de uso de IA; si necesitás ampliar, se informa antes.',
	},
];
