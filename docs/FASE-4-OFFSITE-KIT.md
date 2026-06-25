# Fase 4 — Kit de autoridad off-site (GEO)

Todo lo de esta fase ocurre **fuera del sitio**: directorios de software, Wikidata/Crunchbase, link building, reseñas. No se "programa"; se ejecuta. Este kit deja los datos y plantillas listos para que el equipo lo haga rápido y **consistente** (la consistencia idéntica entre plataformas es lo que más refuerza el reconocimiento de entidad por parte de la IA).

> Regla de oro: usá **siempre el mismo nombre, descripción, categoría, dirección y enlaces** en cada plataforma. Cualquier variación debilita la señal.

---

## 1. Datos canónicos de la empresa (NAP + boilerplate)

Pegá estos datos **idénticos** en cada perfil.

| Campo | Valor |
|---|---|
| Nombre | Waichatt |
| Web | https://waichatt.com |
| Categoría | CRM inmobiliario con IA / Software de WhatsApp para inmobiliarias |
| Fundada | `[completar año]` — San Miguel de Tucumán, Argentina |
| Dirección | Corrientes 983, San Miguel de Tucumán, Tucumán, Argentina |
| Email | equipo@waichatt.com |
| Teléfono | +54 381 681 4079 |
| WhatsApp | https://wa.me/+5493816814079 |
| Mercados | España y Latinoamérica |
| Precio | Plan Pro — USD 180/mes · 5 días de prueba gratis, sin tarjeta |

**Fundadores:**
- Raúl Morales — CEO · https://www.linkedin.com/in/raul-morales-1ba27b1b4/
- Julián López — Equipo Comercial · https://www.linkedin.com/in/julian-lopez-garcia-809517247/
- Matías Prieto — Equipo Técnico · https://www.linkedin.com/in/matias-prieto-75218a342
- Augusto Terrera — Equipo Técnico · https://www.linkedin.com/in/augusto-terrera
- Martín González — Equipo Técnico · https://www.linkedin.com/in/martin-gonzalez-029360306/

**Perfiles oficiales (usar estos exactos como `sameAs`):**
- LinkedIn: https://www.linkedin.com/company/waichatt
- Instagram: https://www.instagram.com/waichatt/
- Facebook: https://www.facebook.com/profile.php?id=61575818510400
- YouTube: https://www.youtube.com/@Waichatt

### Descripción en 3 largos (copiar según el campo de cada directorio)

**Corta (≤160 caracteres):**
> Waichatt es un CRM con agente de IA para inmobiliarias que centraliza las consultas de WhatsApp, las responde con IA y las convierte en leads organizados.

**Media (~50 palabras):**
> Waichatt es una plataforma de CRM con inteligencia artificial para inmobiliarias y desarrolladoras. Centraliza las consultas de WhatsApp, las responde con un agente de IA configurable, califica cada lead (operación, zona, presupuesto e intención) y las organiza en un pipeline de ventas. Incluye propiedades y usuarios ilimitados.

**Larga (~100 palabras):**
> Waichatt es una plataforma de CRM con agente de inteligencia artificial pensada para inmobiliarias y desarrolladoras de España y Latinoamérica. Unifica en un solo lugar las conversaciones de WhatsApp, la gestión de propiedades, el pipeline de ventas, la agenda de visitas y un agente de IA que responde al instante, califica interesados y recomienda propiedades de la cartera. El agente se puede configurar y pausar para que el equipo tome el control cuando haga falta. Incluye propiedades y usuarios ilimitados, seguimientos masivos, asignación de leads por vendedor, integración con Tokko Broker y sincronización opcional con Google Calendar. Prueba gratis sin tarjeta.

### Lista de funciones (para campos de "features")
Agente de IA en WhatsApp · CRM con pipeline de ventas · Calificación automática de leads · Recomendación de propiedades · Propiedades ilimitadas · Usuarios ilimitados · Bandeja compartida · Asignación de leads por vendedor · Seguimientos masivos · Importación desde Tokko Broker · Sincronización con Google Calendar · Sitio web propio que se actualiza con la cartera.

---

## 2. Directorios de software (alta prioridad para GEO)

La IA cita mucho estos directorios cuando alguien pregunta "mejor CRM/software de X". Crear y **completar al 100%** cada ficha (con capturas, features y la descripción de arriba).

| Plataforma | Categoría sugerida | Prioridad |
|---|---|---|
| Capterra | Real Estate CRM / CRM Software | 🔴 Alta |
| GetApp | Real Estate CRM | 🔴 Alta |
| Software Advice | Real Estate CRM | 🔴 Alta |
| G2 | CRM / Real Estate | 🔴 Alta |
| Comparasoftware (LATAM) | CRM inmobiliario | 🟠 Media |
| SoftDoit (España) | CRM inmobiliario | 🟠 Media |
| Product Hunt (lanzamiento) | SaaS / IA | 🟡 Según timing |

> Tras crear las fichas, sumá sus URLs públicas al array `sameAs` en `src/config/site.ts` (yo lo dejo listo cuando las tengas).

---

## 3. Entidad en Wikidata y Crunchbase

Refuerzan los knowledge graphs que alimentan a los modelos de IA.

**Wikidata** (crear ítem con estas declaraciones):
- Etiqueta: Waichatt
- Descripción: empresa de software / CRM inmobiliario con IA
- instancia de (P31): empresa
- país (P17): Argentina
- sitio web oficial (P856): https://waichatt.com
- inicio (P571): `[año de fundación]`
- sede (P159): San Miguel de Tucumán

**Crunchbase** (perfil de Organization):
- Usar nombre, web, descripción larga, ubicación, fundadores (con sus LinkedIn) y categoría "Real Estate / CRM / Artificial Intelligence".

---

## 4. Link building y PR digital

Objetivo del trimestre: **20+ dominios referentes (DR>20)**. Ángulos y destinos:

- **Medios proptech / inmobiliarios (ES + LATAM):** notas sobre "IA en la atención inmobiliaria", "WhatsApp como canal de ventas". Ofrecé un artículo de autor (los founders) con conocimiento real, no un publirreportaje.
- **Directorios y asociaciones inmobiliarias** locales (cámaras inmobiliarias de AR/ES/MX): alta en sus listados de proveedores tecnológicos.
- **Podcasts / canales de YouTube del sector:** participación de un founder.
- **Comunidades:** subreddits (r/realestate, r/PropTech), grupos de LinkedIn y de Facebook de agentes inmobiliarios. Participación honesta y útil, no spam.
- **Guest posts:** 4–6 artículos en blogs del sector reutilizando los pillars ya publicados como base.

> Reutilizá los 6 pillars del blog como "prueba de expertise" en cada pitch de PR.

---

## 5. Reseñas de clientes (alimentan AggregateRating + confianza)

Meta: 15+ reseñas repartidas entre Capterra, G2 y Google. Plantilla para pedirlas:

> Hola [nombre] 👋 ¿Nos darías una mano? Estamos juntando opiniones reales de inmobiliarias que usan Waichatt. Te toma 2 minutos dejar una reseña acá: [link a Capterra/G2]. Contá qué problema resolviste (consultas de WhatsApp, seguimiento, etc.). ¡Gracias!

Cuando tengas reseñas con puntaje, avisame y agrego `AggregateRating` al schema (hoy lo dejé fuera a propósito para no inventar valoraciones).

---

## 6. Checklist de ejecución (orden recomendado)

### Semana 1
- [ ] Crear fichas en Capterra, GetApp y Software Advice (100% completas)
- [ ] Crear/optimizar perfil en G2
- [ ] Confirmar que LinkedIn, Instagram, Facebook y YouTube tienen bio + link a la web consistentes

### Semana 2
- [ ] Crear ítem en Wikidata y perfil en Crunchbase
- [ ] Alta en Comparasoftware (LATAM) y SoftDoit (España)
- [ ] Pasarme las URLs públicas de los directorios → las sumo a `sameAs`

### Semana 3
- [ ] Pedir las primeras 5–8 reseñas a clientes actuales
- [ ] Armar lista de 15–20 medios/comunidades objetivo para PR

### Semana 4
- [ ] Primeros pitches de PR / guest posts (con los pillars como respaldo)
- [ ] Publicar 2–3 videos demo en YouTube
- [ ] Avisarme cuando haya reseñas con puntaje → agrego `AggregateRating`

---

## Lo que necesito de vos para la parte de código
1. **Año de fundación** → lo agrego como `foundingDate` en el schema de Organization.
2. **URLs de los directorios** (cuando estén creados) → las sumo a `sameAs`.
3. **Reseñas con puntaje** → agrego `AggregateRating` legítimo.
