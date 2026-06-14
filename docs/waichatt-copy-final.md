# Waichatt — Copy final de la landing (listo para Astro)

Textos definitivos de la home, sección por sección, en español rioplatense. Cada bloque indica su jerarquía de encabezado (para SEO) y los `[CAPTURA]` / `[VIDEO]` marcan dónde va cada asset.

- **Producto:** Waichatt
- **Hero:** "Tu WhatsApp atiende solo"
- **CTA principal:** "Empezá gratis" → `https://waichatt.app/register`
- **Acento:** verde `#259A72`

---

## SEO de la home (para el componente `<SEO />`)

- **Title (≤60 car.):** Waichatt — Tu WhatsApp inmobiliario atiende solo con IA
- **Meta description (≤155 car.):** Centralizá las consultas de WhatsApp, respondelas con IA y convertilas en leads organizados. CRM para inmobiliarias y desarrolladoras. Empezá gratis.
- **OG title:** Tu WhatsApp atiende solo — Waichatt
- **OG description:** WhatsApp + IA + CRM en un solo lugar. Para inmobiliarias y desarrolladoras. Empezá gratis, sin tarjeta.
- **OG image:** captura del dashboard o del flujo de chat (1200×630).
- **Schema:** `SoftwareApplication` + `Organization`.

---

## Nav (header)

Corto y directo, sin menúes desplegables (referencia: Tokko).

**Logo Waichatt** · Funciones · Precios · Blog · Ingresar · **[Empezá gratis]** (botón verde)

- "Ingresar" → `https://waichatt.app`
- "Empezá gratis" → `https://waichatt.app/register`

---

## 1. Hero  `<h1>`

**Layout (referencia Tokko):** dos columnas. Texto a la izquierda (badge + título + subtítulo + CTA), video del sistema a la derecha dentro de un mockup de navegador. Fondo blanco, mucho espacio en blanco. En mobile, el texto va arriba y el video debajo.

**Badge:** Para inmobiliarias y desarrolladoras

**H1:** Tu WhatsApp **atiende solo**
> Resaltar "atiende solo" en verde `#259A72`; el resto en `#14201B`. (Mismo recurso que Tokko con "más simple" en su rojo.)

**Subtítulo:** Waichatt centraliza tus consultas, las responde con IA y las convierte en leads organizados. Tu equipo atiende, hace seguimiento y vende desde un solo lugar.

**CTA principal:** Empezá gratis
**CTA secundario:** Ver cómo funciona

*Debajo del botón:* Sin tarjeta. Sin instalación.

`[VIDEO a la derecha — corto (15–30s) en loop mostrando "entra consulta → IA responde → se crea lead". Va dentro de un mockup de navegador. Reemplaza la ilustración: mostramos el producto real, no un dibujo decorativo.]`

**Especificaciones técnicas del video del hero (clave para velocidad y SEO):**

- Alojado en Mux / Cloudflare Stream o MP4 optimizado desde CDN — **nunca** en el propio servidor.
- Atributos: `autoplay`, `muted`, `loop`, `playsinline` (arranca solo, sin sonido, sin controles).
- **`poster` obligatorio:** una captura estática linda (bandeja de conversaciones) que se muestra mientras el video carga, para que el hero se vea completo desde el primer instante.
- Reservar el espacio del video con dimensiones fijas para evitar el salto de layout (CLS, que Google penaliza).
- El `<h1>`, subtítulo y botón siempre en HTML visible — el video es apoyo, nunca reemplaza al texto.

---

## 2. Problema  `<h2>`

**H2:** ¿Te suena familiar?

Las consultas llegan al celular de cada vendedor. Algunas se responden en minutos, otras nunca. Lanzás una campaña y entran cientos de mensajes que nadie puede atender a tiempo. No sabés qué propiedad le interesa a quién, los seguimientos dependen de la memoria y, al fin de mes, no podés medir cuántas oportunidades se perdieron.

**Remate:** No es un problema de tu equipo. Es que WhatsApp solo no alcanza.

---

## 3. Módulos del sistema  `<h2>`

**H2:** Todo lo que tu equipo necesita, en una sola plataforma

### Conversaciones  `<h3>`
**Todo tu WhatsApp en una sola bandeja.**
Cada consulta entra a un inbox compartido con etiquetas, asignación por vendedor y el historial completo del cliente al lado del chat. Nadie responde a ciegas, nada se pierde en un celular personal.
`[CAPTURA: bandeja de conversaciones con el panel lateral del cliente y el resumen de IA]`

### Agente IA  `<h3>`
**Respuesta inmediata, a cualquier hora.**
La IA contesta al instante, entiende qué busca el cliente, le recomienda propiedades reales de tu cartera y registra los datos en el CRM. Cuando hace falta un humano, deriva al vendedor correcto. Vos definís las reglas; ella las cumple.
`[CAPTURA: pantalla de configuración del agente IA — tono, rol, reglas]`

### CRM  `<h3>`
**Cada consulta se vuelve una oportunidad medible.**
Contactos, leads y pipeline conectados a las conversaciones. Sabés en qué etapa está cada interesado, qué propiedades mira y qué vendedor lo atiende.
`[CAPTURA: pipeline Kanban con las etapas Nuevo → Contactado → Visita → Negociación]`

### Propiedades  `<h3>`
**Tu cartera, lista para vender en todos lados.**
Cargá o importá desde Tokko en minutos. Tus propiedades quedan disponibles para la IA, el CRM, tu web y para compartir en cualquier conversación con un clic.
`[CAPTURA: catálogo de propiedades en vista de tarjetas con los filtros]`

### Calendario  `<h3>`
**De la consulta a la visita, sin idas y vueltas.**
Agendá visitas vinculadas a lead, propiedad y vendedor, sincronizadas con Google Calendar.
`[CAPTURA: vista de calendario semanal con visitas agendadas]`

### Vista general  `<h3>`
**Por primera vez, números reales de tu negocio.**
Cuántas consultas entraron, cuántas respondió la IA, qué vendedores convierten más, qué propiedades tienen demanda. Decisiones con datos, no con sensaciones.
`[CAPTURA: dashboard con métricas y gráficos]`

---

## 4. Para quién es  `<h2>`

**H2:** Pensado para cómo trabajás vos

### Para inmobiliarias  `<h3>`
Centralizá las consultas de toda tu cartera, organizá a tus vendedores y no dejes ningún interesado sin seguimiento. Cada conversación queda vinculada a propiedades reales, con visitas agendadas y resultados medibles.

### Para desarrolladoras  `<h3>`
Cuando lanzás un emprendimiento, las consultas llegan todas juntas. La IA las responde al instante, las califica y las reparte entre tu equipo comercial. Hacé seguimiento de cada interesado durante todo el ciclo de venta y medí qué campaña trae los compradores reales.

---

## 5. Cómo funciona  `<h2>`

**H2:** Empezá a vender mejor en el día

1. **Creá tu cuenta** — gratis, sin tarjeta.
2. **Conectá tu WhatsApp y cargá tus propiedades** — o importalas desde Tokko en minutos.
3. **Activá tu agente IA** — y mirá cómo cada consulta se convierte en un lead organizado.

**CTA:** Empezá gratis

---

## 6. Prueba social  `<h2>`

*(Sin testimonios todavía. Va con métricas/capacidades del producto. Reemplazar por logos y testimonios reales apenas existan.)*

**H2:** Una plataforma que trabaja mientras vos dormís

- **24/7** — la IA responde al instante, también fuera de horario.
- **Segundos** — el tiempo que tarda en contestar una consulta nueva.
- **1 lugar** — todas tus consultas, propiedades y visitas centralizadas.
- **Tokko** — importás tu cartera sin cargar nada a mano.

`[CAPTURA opcional: franja de logos de integraciones — WhatsApp, Meta, Tokko, Google Calendar, Mercado Pago, MercadoLibre]`

---

## 7. Precios  `<h2>`

**H2:** Planes claros, sin sorpresas

**Subtítulo:** Empezá gratis y pasá al Pro cuando lo necesites. Sin costos ocultos.

### Tu negocio online — USD 0 /mes
Para siempre.
- Web propia con tu catálogo (en subdominio)
- Hasta 20 propiedades
- Botón de WhatsApp directo
- 1 usuario
- Sello "Hecho con Waichatt"
**CTA:** Empezá gratis

### Para quien trabaja solo — USD 80 /mes  · *Más elegido*
1 usuario · **7 días de prueba**
- Todo lo del plan gratis, más:
- Dominio propio, sin sello
- Propiedades ilimitadas
- Agente IA en WhatsApp
- CRM con pipeline comercial
- Seguimientos masivos
- Soporte por chat
**CTA:** Probar 7 días gratis

### Para equipos con vendedores — USD 180 /mes
5 usuarios
- Todo lo del Pro, más:
- Asignación de leads por vendedor
- Soporte prioritario
- Onboarding asistido
**CTA:** Empezá gratis

*Nota al pie:* Todos los planes incluyen un límite mensual de uso de IA. Si necesitás ampliar, te lo informamos antes. Facturación mensual o anual.

---

## 8. Cierre  `<h2>`

**H2:** La próxima consulta puede ser una venta. O un mensaje más sin responder.

Probá Waichatt gratis y descubrí cuántas oportunidades estabas dejando pasar.

**CTA principal:** Empezá gratis
*Debajo:* Sin tarjeta. Empezás en minutos.

---

## 9. FAQ  `<h2>`

**H2:** Preguntas frecuentes

1. **¿Waichatt es un CRM o solo un bot de WhatsApp?** Es una plataforma CRM completa: conversaciones por WhatsApp, gestión de leads, propiedades, visitas, equipo, reportes y un agente IA configurable.
2. **¿La IA puede recomendar propiedades?** Sí. Interpreta zona, presupuesto, tipo de operación y preferencias para sugerir propiedades de tu cartera.
3. **¿Puedo apagar la IA en una conversación?** Sí. Cada chat puede tener el agente activado o pausado, para que tu equipo tome el control cuando quiera.
4. **¿Sirve para ventas y alquileres?** Sí. Gestionás propiedades en venta, alquiler o temporal, y seguís cada oportunidad desde el primer contacto hasta la negociación.
5. **¿Se puede importar desde Tokko Broker?** Sí. Importación y sincronización de propiedades vía API.
6. **¿Qué pasa si responde una persona desde WhatsApp Business?** El bot se pausa automáticamente cuando interviene un humano, manteniendo una convivencia ordenada.
7. **¿Sirve para equipos?** Sí. Invitás integrantes, asignás roles y repartís conversaciones o leads entre vendedores.
8. **¿Incluye una web para mi negocio?** Sí. Un sitio propio que se actualiza solo con tu cartera de propiedades.
9. **¿Ofrecen prueba gratis?** Sí. Empezás gratis sin tarjeta, y el plan Pro tiene 7 días de prueba. Te registrás en waichatt.app/register.
10. **¿Hay costos ocultos?** No. El precio es claro desde el inicio. Incluye un límite mensual de uso de IA; si necesitás ampliar, se informa antes.

---

## 10. Footer

- **Producto:** Funciones · Precios · Ingresar
- **Recursos:** Blog
- **Legales:** Términos y Condiciones · Política de Privacidad
- **Contacto:** info@waichatt.com · +54 381 681 4079
- **Aviso:** Waichatt es una plataforma independiente. No está afiliada ni es distribuidora oficial de WhatsApp ni Meta.

---

## Microcopy y notas de tono

- CTA primario siempre "Empezá gratis", salvo en el Pro, donde conviene "Probar 7 días gratis".
- Voseo en todo el sitio (tenés, cargá, mirá).
- El verde solo en botones, links, números de métricas y el badge.
- Un solo `<h1>` (el del hero). Todo lo demás `<h2>`/`<h3>`.