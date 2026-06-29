// Pasos del onboarding que se muestran en la home (sección "Cómo funciona").
// Se reutiliza en: componente Steps.astro y schema HowTo de la home, para que el
// structured data coincida con el contenido visible (requisito de Google).
export interface Step {
	title: string;
	desc: string;
}

export const steps: Step[] = [
	{
		title: 'Crea tu cuenta',
		desc: 'Gratis, sin tarjeta y lista para empezar a configurar tu negocio.',
	},
	{
		title: 'Conecta tu WhatsApp y carga tus propiedades',
		desc: 'O impórtalas desde Tokko en minutos.',
	},
	{
		title: 'Activa tu agente IA',
		desc: 'Mira cómo cada consulta se convierte en un lead organizado.',
	},
];
