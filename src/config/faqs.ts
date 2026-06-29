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
		answer: 'Sí. Gestionas propiedades en venta, alquiler o temporal, y sigues cada oportunidad desde el primer contacto hasta la negociación.',
	},
	{
		tag: 'Captación',
		question: '¿Waichatt sirve también para captar propiedades?',
		answer: 'Sí. Además del embudo de ventas, tiene un pipeline de captación propio: cada propietario queda con los datos de su propiedad, su intención y la calidad del lead, para que ninguna oportunidad de captación se pierda.',
	},
	{
		tag: 'Integraciones',
		question: '¿Se puede importar desde Tokko Broker?',
		answer: 'Sí. Importación y sincronización de propiedades vía API.',
	},
	{
		tag: 'Google Calendar',
		question: '¿Qué pasa cuando conecto Google Calendar?',
		answer: 'Waichatt usa la cuenta y el calendario que autorizas para sincronizar las visitas y citas de tu negocio. La conexión es opcional y puedes revocarla en cualquier momento.',
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
		answer: 'No. El precio es claro desde el inicio. Incluye un límite mensual de uso de IA; si necesitas ampliar, se informa antes.',
	},
];

// FAQ específica de la página de precios.
export const pricingFaqs: Faq[] = [
	{
		tag: 'Prueba',
		question: '¿Cómo es la prueba gratis?',
		answer: 'El plan incluye 5 días de prueba gratis, sin tarjeta. Si no sigues, no se cobra nada.',
	},
	{
		tag: 'Plan',
		question: '¿Qué incluye el plan?',
		answer: 'Propiedades y usuarios ilimitados, agente IA en WhatsApp, CRM con pipeline, seguimientos masivos, asignación de leads por vendedor, soporte prioritario y onboarding asistido.',
	},
	{
		tag: 'Precio',
		question: '¿Hay costos ocultos?',
		answer: 'No. El precio es claro desde el inicio: un plan mensual de USD 180 con todo incluido.',
	},
	{
		tag: 'Uso de IA',
		question: '¿Qué pasa con el límite de uso de IA?',
		answer: 'El plan incluye un límite mensual de uso de IA. Si necesitas ampliarlo, te lo informamos antes; nunca hay cargos sorpresa.',
	},
	{
		tag: 'Prueba',
		question: '¿Necesito tarjeta para empezar?',
		answer: 'No. Puedes empezar la prueba sin tarjeta ni datos de pago.',
	},
];

// FAQ específica de la página para inmobiliarias.
export const realEstateFaqs: Faq[] = [
	{
		tag: 'Operación',
		question: '¿Sirve para ventas y alquileres?',
		answer: 'Sí. Gestionas propiedades en venta, alquiler o temporal, y sigues cada oportunidad desde el primer contacto hasta la negociación.',
	},
	{
		tag: 'Captación',
		question: '¿Puedo gestionar la captación de propiedades, no solo la venta?',
		answer: 'Sí. Waichatt tiene un pipeline de captación separado del de ventas: registra los datos de la propiedad del propietario, su intención y la calidad del lead, y sigues cada captación hasta sumarla a tu cartera.',
	},
	{
		tag: 'Agente IA',
		question: '¿La IA puede recomendar propiedades de mi cartera?',
		answer: 'Sí. Interpreta zona, presupuesto, tipo de operación y preferencias para sugerir propiedades de tu cartera.',
	},
	{
		tag: 'Integraciones',
		question: '¿Puedo importar mis propiedades?',
		answer: 'Sí. Se pueden importar y sincronizar propiedades desde Tokko Broker vía API.',
	},
	{
		tag: 'Equipo',
		question: '¿Cada vendedor ve solo sus consultas?',
		answer: 'Trabajas con una bandeja compartida con historial completo y puedes asignar cada lead al vendedor responsable.',
	},
	{
		tag: 'Control',
		question: '¿Puedo pausar la IA en una conversación?',
		answer: 'Sí. Cada chat puede tener el agente activado o pausado, para que tu equipo tome el control cuando quiera.',
	},
];

// FAQ específica de la página para desarrolladoras.
export const developersFaqs: Faq[] = [
	{
		tag: 'Lanzamientos',
		question: '¿Cómo maneja los picos de consultas de un lanzamiento?',
		answer: 'El agente IA responde al instante a cada interesado, aunque entren cientos de mensajes juntos, y deriva a una persona cuando hace falta.',
	},
	{
		tag: 'Agente IA',
		question: '¿Puede calificar interesados automáticamente?',
		answer: 'Sí. Registra zona, presupuesto, unidad de interés y madurez de compra desde la conversación.',
	},
	{
		tag: 'Seguimiento',
		question: '¿Sirve para seguimientos largos de preventa?',
		answer: 'Sí. Cada consulta queda en el pipeline para hacer seguimiento durante todo el ciclo, sin que ninguna oportunidad se enfríe.',
	},
	{
		tag: 'Equipo',
		question: '¿Se pueden repartir leads entre el equipo comercial?',
		answer: 'Sí. Puedes asignar leads por vendedor para distribuir la demanda del lanzamiento.',
	},
	{
		tag: 'Control',
		question: '¿La IA se puede pausar para que intervenga una persona?',
		answer: 'Sí. En cada conversación el agente puede activarse o pausarse para que tu equipo tome el control.',
	},
];
