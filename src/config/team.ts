export interface TeamMember {
	name: string;
	/** Rol visible, ej. "Cofundador · Equipo Comercial". */
	role: string;
	area: 'Comercial' | 'Técnico';
	linkedin: string;
}

// Equipo fundador de Waichatt (Tucumán, Argentina).
// Se reutiliza en: schema `founder` de Organization, página /nosotros/ y autoría del blog.
export const team: TeamMember[] = [
	{
		name: 'Raúl Morales',
		role: 'CEO y cofundador · Equipo Comercial',
		area: 'Comercial',
		linkedin: 'https://www.linkedin.com/in/raul-morales-1ba27b1b4/',
	},
	{
		name: 'Julián López',
		role: 'Cofundador · Equipo Comercial',
		area: 'Comercial',
		linkedin: 'https://www.linkedin.com/in/julian-lopez-garcia-809517247/',
	},
	{
		name: 'Matías Prieto',
		role: 'Cofundador · Equipo Técnico',
		area: 'Técnico',
		linkedin: 'https://www.linkedin.com/in/matias-prieto-75218a342',
	},
	{
		name: 'Augusto Terrera',
		role: 'Cofundador · Equipo Técnico',
		area: 'Técnico',
		linkedin: 'https://www.linkedin.com/in/augusto-terrera',
	},
	{
		name: 'Martín González',
		role: 'Cofundador · Equipo Técnico',
		area: 'Técnico',
		linkedin: 'https://www.linkedin.com/in/martin-gonzalez-029360306/',
	},
];
