# Roadmap — Landing comercial Waichatt (Astro)

Objetivo: una landing B2B minimalista, rápida y bien posicionada en Google, pensada para recibir tráfico de publicidad y de búsqueda orgánica, que lleve a inmobiliarias y desarrolladoras a registrarse y probar el sistema.

- **Producto:** Waichatt (en todo lo visible se usa "Waichatt").
- **Color de marca:** `#259A72`
- **Stack:** Astro (landing separada del sistema, que sigue en Next.js)
- **Hosting:** Cloudflare Pages / Vercel / Netlify
- **Registro:** el botón principal apunta a `https://waichatt.app/register`
- **Prueba:** se empieza gratis; el plan Pro tiene 7 días de prueba.

Las fases están ordenadas para plasmarlas de arriba hacia abajo. Cada una deja algo terminado antes de pasar a la siguiente. Con las fases 0 a 6 ya tenés una landing que posiciona, carga rápido y recibe publicidad. La fase 7 es continua.

> **Estado al 2026-06-18 (relevado contra el código):** la landing está construida y funcionando. Fases 0, 1, 4 y 6 prácticamente completas; fase 2 con la paleta y los componentes hechos pero **la tipografía no sigue el plan** (ver abajo); fase 3 resuelta con **mockups en vivo HTML/CSS** en lugar de capturas/videos; fase 5 mayormente cubierta salvo fuentes; fase 7 con la infraestructura del blog y las páginas hijas listas.
>
> **Divergencias respecto del plan original:**
> - **Tipografía:** se usa **Inter** del sistema (sin auto-hospedar, sin `@fontsource`), justo la fuente que el roadmap pedía evitar. No se incorporaron General Sans / Cabinet Grotesk. → *pendiente real de Fase 2/5*.
> - **CSS:** se usa **CSS plano con `:root` + scope de Astro**, no Tailwind v4. (Era la alternativa contemplada en el Stack, así que es una desviación válida.)
> - **Íconos:** Phosphor solo vía `astro-icon` para logos de marca (WhatsApp/Meta/Calendar); el resto de íconos de los mockups son **SVG inline propios** (`MockIcon.astro`), no Phosphor.
> - **Mostrar el sistema:** en vez de screenshots + video se hicieron **mockups interactivos en vivo** (Conversaciones, Agente IA, Pipeline). Los PNG en `src/assets/features/` quedaron sin usar. Faltan los videos.
> - **Orden de secciones:** la home final no usa el orden literal de la Fase 1. La sección "Problema" (`ProblemSolution`) **se eliminó** del proyecto; la home va Hero → Features → Audiences → Steps → Pricing → FAQ → FinalCta.

> **Dos principios que atraviesan todo el roadmap:**
> 1. **Velocidad** — cada decisión técnica se elige por su impacto en Core Web Vitals. Cero JS donde no haga falta, fuentes auto-hospedadas, imágenes y video optimizados.
> 2. **SEO** — el contenido importante siempre en el HTML (no escondido tras JS), jerarquía de encabezados correcta, metadatos completos. Google tiene que poder leer y entender todo sin ejecutar scripts.

---

## Decisiones ya tomadas

| Tema | Decisión |
| --- | --- |
| Nombre visible | Waichatt |
| Hero (titular) | "Tu WhatsApp atiende solo" |
| Público | Inmobiliarias + desarrolladoras, en una sola home |
| Botón principal | "Empezá gratis" → `https://waichatt.app/register` |
| Prueba del Pro | 7 días (se menciona en precios, no en el hero) |
| Testimonios | No hay todavía; sección preparada con métricas del producto |
| Precios | 3 planes (ver Fase 1), con nombres neutralizados |

---

## Fase 0 — Cimientos (antes de tocar diseño)

Definiciones de negocio (ya resueltas, las dejo como referencia):

- [x] Público: inmobiliarias + desarrolladoras en una sola home.
- [x] Objetivo único de la página: que toquen "Empezá gratis".
- [x] URL del botón: `https://waichatt.app/register`.
- [x] Prueba: 7 días sobre el plan Pro.
- [x] Precios: los 3 planes del mockup, neutralizados.
- [x] Testimonios: no hay; sección preparada para sumar después.

En Astro:

- [x] Proyecto nuevo y separado del sistema.
- [x] Instalar `@astrojs/sitemap`.
- [x] Conectar deploy a Cloudflare Pages / Vercel / Netlify desde el día uno (preview en vivo de cada cambio).

---

## Fase 1 — Arquitectura de contenido y copy

Secciones de la home, en orden:

1. Hero — "Tu WhatsApp atiende solo" + botón "Empezá gratis"
2. Problema
3. Módulos del sistema
4. Bloque dual: "Para inmobiliarias" / "Para desarrolladoras"
5. Cómo funciona en 3 pasos
6. Prueba social (métricas del producto por ahora)
7. Precios
8. Cierre
9. FAQ
10. Footer

Tareas:

- [x] Integrar el copy y ajustar textos al público dual (negocio/equipo, no solo "inmobiliaria"). — planes neutralizados en `config/plans.ts`; sección `Audiences` cubre los dos públicos.
- [x] Jerarquía SEO: **un solo `<h1>`** (el del hero); el resto `<h2>`/`<h3>` en orden lógico. — un único `<h1>` en `Hero.astro`.
- [x] Dejar preparada la estructura de carpetas para páginas hijas: `/precios`, `/para-inmobiliarias`, `/para-desarrolladoras`, `/blog`. — las cuatro existen en `src/pages/`.

### Planes (nombres neutralizados para los dos públicos)

| Plan | Nombre | Precio | Incluye (resumen) |
| --- | --- | --- | --- |
| Gratis | Tu negocio online | USD 0 /mes (para siempre) | Web propia en subdominio, hasta 20 propiedades, botón de WhatsApp, 1 usuario, sello "Hecho con Waichatt" |
| Pro | Para quien trabaja solo | USD 80 /mes (1 usuario) · **7 días de prueba** | Dominio propio sin sello, propiedades ilimitadas, agente IA en WhatsApp, CRM con pipeline, seguimientos masivos, soporte por chat |
| Equipo | Para equipos con vendedores | USD 180 /mes (5 usuarios) | Todo lo del Pro + asignación de leads por vendedor, soporte prioritario + onboarding asistido |

> Nota: los textos internos de cada plan que decían "inmobiliaria" se reemplazan por "negocio" / "equipo" para que sirvan también a desarrolladoras.

---

## Fase 2 — Sistema de diseño

- [x] Paleta como variables CSS: verde `#259A72` y su escala (tinte claro, hover oscuro, texto verde fuerte) + neutros. — en `:root` de `global.css`. *Falta:* los colores funcionales (error/éxito/advertencia) aún no están como variables; solo existe `--focus-ring`.
- [ ] Una sola tipografía por rol: una para títulos, una para texto (ver Stack). — ⚠️ **no hecho según el plan:** se usa **Inter del sistema** (sin auto-hospedar), la fuente que el roadmap pedía evitar.
- [x] Componentes base reutilizables: botón primario, botón secundario, tarjeta, badge, contenedor de sección. — `ui/Button.astro`, contenedores `.section-band`/`.section-inner`, badges (`.eyebrow`). *Falta:* un componente `Card` reutilizable (las tarjetas hoy son CSS por sección).

Criterio de diseño de toda la fase:

- El verde **solo** para botones, links y números.
- El 90% de la pantalla: blanco y grises.
- Mucho espacio en blanco.
- Tomar la dirección visual de la maqueta de los compañeros, pero **bajar los efectos pesados** (blurs grandes, glows que siguen el mouse, animaciones infinitas): se ven lindos pero castigan la velocidad en celular, que es donde cae el tráfico de ads.

### Paleta de referencia

| Rol | Hex |
| --- | --- |
| Verde principal | `#259A72` |
| Verde hover / oscuro | `#1B7A5B` |
| Verde texto / acento fuerte | `#134D3A` |
| Verde tinte suave | `#B8E0D2` |
| Verde tinte claro (fondos) | `#E9F5F0` |
| Texto / títulos | `#14201B` |
| Texto secundario | `#5A6661` |
| Bordes | `#E4E7E5` |
| Fondo secciones | `#F6F7F6` |
| Fondo / tarjetas | `#FFFFFF` |

#### Colores funcionales (para formularios y estados)

No son de diseño visible — no afectan la estética general — pero hacen falta apenas haya un formulario que validar o estados que mostrar. Definirlos como variables CSS desde el inicio para que nadie improvise un rojo cualquiera.

| Rol | Hex | Uso |
| --- | --- | --- |
| Error / peligro | `#D92D20` | Mensajes de error y validaciones de formulario |
| Éxito | `#259A72` (o `#16A34A` para diferenciar del acento) | Confirmaciones, "guardado con éxito" |
| Advertencia (opcional) | `#D97706` | Avisos tipo "tu prueba vence en 2 días" |
| Foco (accesibilidad) | `rgba(37, 154, 114, 0.4)` | Anillo de foco al navegar con teclado (suma accesibilidad y SEO) |

---

## Fase 3 — Mostrar el sistema (confianza)

La fase que más convierte.

- [x] Capturas reales del sistema con datos de demo prolijos (nombres y propiedades ficticias pero creíbles), dentro de mockups de navegador/celular. — *resuelto distinto:* **mockups interactivos en vivo** (`Conversaciones`, `AgenteIa`, Pipeline kanban) con datos de demo creíbles, en lugar de screenshots.
- [ ] Video principal de 60–90 s: flujo completo "consulta entra → IA responde → se crea lead → se agenda visita". — pendiente.
- [ ] Videos cortos en loop de 10–20 s por módulo (Conversaciones, Agente IA, CRM, Propiedades, Calendario, Dashboard, Campañas). — pendiente.

Técnico (impacto directo en velocidad):

- [ ] Videos **nunca** alojados en el propio servidor → YouTube/Vimeo embebido, o Mux / Cloudflare Stream para algo más profesional. — todavía no hay videos.
- [ ] Imágenes pasadas por el componente `<Image />` de Astro (convierte a WebP/AVIF y sirve el tamaño justo). — solo el logo del `Footer` usa `<Image />`; los PNG de `src/assets/features/` quedaron sin usar (reemplazados por mockups).
- [x] Cada imagen con su `alt` describiendo qué módulo muestra (suma SEO y accesibilidad). — imágenes y mockups presentes tienen `alt`/`aria-label`.

---

## Fase 4 — SEO técnico

- [x] Meta description por página. — vía `SEO.astro`; cada página pasa su `description`.
- [x] Open Graph completo (título, descripción e imagen) + Twitter Card (para que el link se vea bien al compartirlo y en los anuncios). — OG completo + `twitter:card summary_large_image` en `SEO.astro`.
- [x] Datos estructurados schema.org: `SoftwareApplication` y `Organization`. — en `config/schema.ts` (además `BlogPosting` y `BreadcrumbList`).
- [x] `sitemap.xml` (la genera el plugin) y `robots.txt`. — `@astrojs/sitemap` genera `sitemap-index.xml`; `robots.txt` en `public/` lo referencia.
- [x] URLs limpias y descriptivas. — `/precios`, `/para-inmobiliarias`, etc., con `trailingSlash: 'always'`.
- [x] Canonical tags. — `canonical` + `og:url` normalizados en `SEO.astro`.
- [x] Componente `<SEO />` reutilizable en Astro: cada página le pasa título, descripción e imagen (así no se olvida ninguna). — `components/SEO.astro`.

---

## Fase 5 — Velocidad

Objetivo: Core Web Vitals en verde (factor de ranking de Google).

- [ ] Medir con PageSpeed Insights y trabajar sobre lo que marque. — sin registro de medición todavía.
- [x] Lazy-loading en imágenes y videos debajo del pliegue. — `<Image />` de Astro hace lazy por defecto (hoy hay pocas imágenes; el sistema se muestra con mockups CSS).
- [ ] Fuentes auto-hospedadas con `font-display: swap` (ver Stack). — ⚠️ **no hecho:** se usa Inter del sistema; no hay fuentes auto-hospedadas.
- [x] Cero JavaScript en lo que no lo necesite (Astro ya ayuda). — sitio mayormente HTML/CSS estático; JS mínimo e `is:inline` para tracking y algún `IntersectionObserver`.
- [x] Contenido importante en el HTML aunque el JS no corra (la animación es un agregado, no un requisito para ver el contenido). — todo el contenido se renderiza en el HTML; las animaciones son mejora progresiva.

---

## Fase 6 — Listo para publicidad y medición

Antes de gastar en ads:

- [x] La landing capaz de recibir parámetros UTM. — `Tracking.astro` propaga `utm_*`, `gclid` y `fbclid` a los links salientes (`data-preserve-utm`).
- [x] Píxel de Meta instalado. — `fbq` en `Tracking.astro` (con pixel id por defecto, configurable por env).
- [x] Google Analytics 4 instalado. — `gtag` en `Tracking.astro` (se activa con `PUBLIC_GA_MEASUREMENT_ID`).
- [x] Evento de conversión configurado (clic en "Empezá gratis" o registro completado). — `trackClicks` dispara `Lead`/`click_cta` y detecta `/register` y WhatsApp.
- [ ] Mensaje del anuncio = mensaje del hero (si el ad promete "automatizá tu WhatsApp", el hero repite esa promesa). — operativo (depende de las campañas).
- [ ] Probar la página en celular real, no solo en la compu. — operativo, a verificar.

---

## Fase 7 — Crecimiento orgánico (después de lanzar)

Continuo, se alimenta con el sitio ya en vivo.

- [x] Activar el blog con constancia (Astro content collections + Markdown). — infraestructura lista: `content.config.ts`, `/blog` y `/blog/[slug]`. La "constancia" (publicar seguido) es continua.
- [ ] Artículos que respondan lo que el cliente busca en Google. Ejemplos: — publicado 1 de los 3 ejemplos:
  - [x] "Cómo organizar las consultas de WhatsApp de una inmobiliaria" — ya está en `src/content/blog/`.
  - [ ] "Qué es un CRM inmobiliario"
  - [ ] "Vender en pozo: cómo no perder interesados"
- [x] Lanzar páginas hijas `/para-inmobiliarias` y `/para-desarrolladoras`. — ambas existen y usan `PageHeader` + `BenefitGrid`.
- [ ] Apuntar cada campaña de ads a su página hija (convierten mejor que mandar todo a la home). — operativo (depende de las campañas).

---

## Stack y librerías

Regla general: **lo que hace que una web parezca "hecha con IA" no es el framework, son cinco vicios** — la fuente Inter por defecto, gradientes violetas tipo "blob", glassmorphism por todos lados, íconos genéricos sin criterio, y todo en tarjetas iguales con la misma sombra. Evitando eso y usando **capturas reales del sistema** (no ilustraciones genéricas), la web se despega de la plantilla. Las dos ventajas a favor: color de marca propio + producto real para mostrar.

Cada elección de abajo está tomada priorizando **velocidad** (cero JS innecesario, todo auto-hospedado y optimizado) y **SEO** (HTML limpio que Google lee sin ejecutar scripts).

### Construcción

- **Astro** + **Tailwind v4** (`@astrojs/tailwind`), configurado con la paleta verde y las fuentes fijadas.
- Tailwind no es lo que da el look "IA" (eso es usar componentes de shadcn sin tocar). Con color, fuentes y layout propios, da velocidad sin verse genérico.
- Alternativa: si el equipo prefiere CSS plano, Astro tiene estilos con scope nativo. Tailwind solo acelera el desarrollo.

### Fuentes

- **No usar Inter** (es la que más "delata" una web generada).
- Fuente de **Fontshare**: títulos con **Cabinet Grotesk** o **General Sans**; cuerpo con **General Sans** o **Hanken Grotesk**. Un solo par (una para títulos, una para texto).
- **Auto-hospedar** con los paquetes `@fontsource` (o la API de fuentes nativa de Astro). No cargar desde el CDN de Google: el auto-hospedaje elimina el salto de layout y mejora Core Web Vitals.
- Usar `font-display: swap`.

### Íconos

- **Phosphor Icons** (profesional, con personalidad, varios pesos). Evitar Lucide-con-todo-por-defecto (es el set de shadcn y refuerza el look genérico).
- En Astro: paquete **`astro-icon`** con Iconify → inyecta cada ícono como **SVG inline y solo los que se usan**, sin fuente de íconos ni JS extra. Ideal para velocidad y SEO.
- Elegir **un peso** (ej. "regular" o "duotone") y mantenerlo en todo el sitio. Mezclar pesos se ve amateur.

### Animaciones

Mayor riesgo de "parecer IA": sobre-animar. **Menos es más.** Dos capas:

- **CSS puro** para la mayoría: transiciones suaves en hover de botones/tarjetas, y animaciones al hacer scroll con `animation-timeline: view()` (CSS moderno, sin JavaScript).
- **Motion** (`motion.dev`, antes Motion One) solo donde quieras un detalle fino (un número que cuenta, una secuencia). Es chico y anda sin React.
- Regla: una animación por sección como mucho, sutil, rápida (200–400 ms), y que el contenido se vea aunque la animación no corra. Nada de blurs grandes ni spotlight con el mouse (se ve "demo de librería", no producto serio).

### Multimedia

- Imágenes: componente **`<Image />` de Astro** (WebP/AVIF, tamaño justo, lazy-load).
- Video: **Mux** o **Cloudflare Stream** (nunca alojado en el propio servidor).

### Resumen del stack

| Capa | Elección |
| --- | --- |
| Framework | Astro |
| CSS | Tailwind v4 (`@astrojs/tailwind`) |
| Fuentes | General Sans / Cabinet Grotesk (Fontshare) auto-hospedadas con `@fontsource` |
| Íconos | Phosphor vía `astro-icon` + Iconify (SVG inline) |
| Animación | CSS scroll-driven + Motion solo donde haga falta |
| Imágenes | `<Image />` de Astro (WebP/AVIF) |
| Video | Mux / Cloudflare Stream |
| Sitemap | `@astrojs/sitemap` |
| Deploy | Cloudflare Pages / Vercel / Netlify |

---

## Consejo de secuencia

No esperar a tener todo perfecto para lanzar. Con las fases 0 a 6 terminadas ya hay una landing que posiciona, carga rápido y recibe publicidad. La fase 7 es continua.