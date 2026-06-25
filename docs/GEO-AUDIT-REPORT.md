# Informe de Auditoría GEO: Waichatt

**Fecha de auditoría:** 25/06/2026
**URL:** https://waichatt.com
**Tipo de negocio:** SaaS (CRM + agente IA de WhatsApp para inmobiliarias y desarrolladoras · ES-AR)
**Páginas analizadas:** 8 (a nivel de código fuente + verificación en vivo)

---

## Resumen ejecutivo

**Puntaje GEO general: 51/100 (Pobre — al borde de Aceptable)**

Waichatt tiene una **base técnica excelente** (al renderizar con Astro de forma estática, el 100% del contenido está en el HTML crudo — verificado en vivo —, además de canonicals limpios, sitemap y un buen set de schema FAQ/SoftwareApplication) que está frenada por una **autoridad externa casi nula** y un puñado de **brechas on-page de alto impacto**. El hallazgo más importante: al buscar en motores de IA por la propia categoría de Waichatt ("CRM inmobiliario WhatsApp IA") aparecen competidores (Wazzy, CRMWhata, Inmowa, Dapta, WAIBOT) pero **no Waichatt** — hoy el sitio es invisible para los motores que deberían citarlo. Las soluciones son en su mayoría baratas y on-page: agregar `sameAs`, una página "Nosotros", autores con nombre en el blog, `llms.txt`, schema en las páginas de precios/audiencias, y contenido citable de comparación y definición.

### Desglose del puntaje

| Categoría | Puntaje | Peso | Puntaje ponderado |
|---|---|---|---|
| Citabilidad por IA | 62/100 | 25% | 15,5 |
| Autoridad de marca | 27/100 | 20% | 5,4 |
| Calidad de contenido E-E-A-T | 45/100 | 20% | 9,0 |
| GEO técnico | 78/100 | 15% | 11,7 |
| Schema y datos estructurados | 70/100 | 10% | 7,0 |
| Optimización por plataforma | 25/100 | 10% | 2,5 |
| **Puntaje GEO general** | | | **51/100** |

---

## Problemas críticos (resolver de inmediato)

Ninguno. No hay bloqueos de crawlers, ni `noindex`, ni renderizado solo-JS, ni errores 5xx — la base técnica está limpia. (Esto es poco común y vale la pena destacarlo.)

---

## Problemas de alta prioridad (resolver en 1 semana)

1. **La marca es invisible en las respuestas de IA de su categoría.** La búsqueda con IA por la categoría central devuelve competidores, nunca a Waichatt. La causa raíz es externa: no hay menciones de terceros ni señales de vinculación de entidad en el sitio (ver `sameAs` más abajo). Hasta que los motores de IA puedan reconocer "Waichatt" como una entidad conocida, no la van a recomendar. *Solución: combinación de los puntos `sameAs`, página Nosotros y menciones de marca de abajo.*

2. **Falta `sameAs` en el schema de Organization** ([src/config/schema.ts](src/config/schema.ts)). Un `grep` confirma cero `sameAs` en el código. Es la victoria más barata disponible para reconocimiento de entidad — es la propiedad que la IA usa para vincular tu sitio con LinkedIn/Instagram/YouTube y confirmar que sos una entidad real. *Solución: agregar un array `sameAs: [...]` con todos los perfiles que tengas.*

3. **No hay página "Nosotros" / Sobre la empresa.** No hay equipo, fundadores, historia ni dirección. Para un SaaS que cobra USD 180/mes, esto es una brecha grande de E-E-A-T (Confianza + Experiencia) y elimina la página que la IA busca para describir la empresa. *Solución: agregar `/nosotros/` con fundadores, ubicación (Tucumán/AR) y el problema que resuelven.*

4. **No hay `llms.txt`** (confirmado 404 en `/llms.txt`). Es el estándar emergente para decirle a los sistemas de IA qué es tu sitio y dónde están las páginas clave. Ya generás un sitemap — este es un archivo complementario de 30 minutos. *Solución: agregar `public/llms.txt`.*

5. **No hay atribución de autor en el contenido del blog.** [src/pages/blog/[slug].astro](src/pages/blog/[slug].astro) muestra solo una fecha; `blogPostingSchema` define `author` como la Organization, no como una `Person` con nombre. La IA pondera mucho más a autores con nombre y credenciales para citar. *Solución: agregar un `Person` real como autor con una bio de una línea.*

---

## Problemas de prioridad media (resolver en 1 mes)

1. **Las páginas de precios y audiencias no tienen schema.** [src/pages/precios.astro](src/pages/precios.astro), [src/pages/para-inmobiliarias.astro](src/pages/para-inmobiliarias.astro) y [src/pages/para-desarrolladoras.astro](src/pages/para-desarrolladoras.astro) no pasan `jsonLd`. Precios es tu página de mayor intención y debería exponer `Offer`/`Product`; las páginas de audiencias deberían exponer `Service` e idealmente su propio `FAQPage`. Hoy el schema FAQ solo se dispara en la home.

2. **No hay valoraciones ni testimonios.** No hay `AggregateRating`/`Review` en ningún lado (confirmado por grep), ni logos de clientes ni casos de éxito. La IA favorece fuertemente a las entidades con señales de reseñas. *Solución: juntar 3–5 testimonios, mostrarlos y marcarlos con `Review`/`AggregateRating`.*

3. **Poca profundidad citable — sin datos, definiciones ni comparaciones.** La FAQ y el único artículo del blog están bien estructurados y son citables, pero no hay contenido definicional ("¿Qué es un CRM inmobiliario?"), ni datos, ni comparaciones — los formatos que la IA más cita. Los competidores ya publican estadísticas citables del estilo "el 67% de las interacciones inmobiliarias empiezan en WhatsApp".

4. **Volumen de contenido muy bajo (1 artículo de blog).** La autoridad temática de un SaaS viene de una biblioteca de contenido. Un solo artículo no la establece.

5. **Sin presencia en Wikipedia / Reddit / YouTube** para corroboración de entidad (se vincula con Autoridad de marca).

---

## Problemas de baja prioridad (optimizar cuando se pueda)

1. `organizationSchema.logo` es una URL en string mientras que `publisherOrg.logo` es un `ImageObject` ([src/config/schema.ts](src/config/schema.ts)) — usar `ImageObject` en ambos por consistencia. El logo además apunta a `favicon.svg`; es preferible un PNG de logo dedicado para rich results.
2. No hay schema `WebSite` con `potentialAction` (SearchAction) — menor.
3. Considerar consistencia de `inLanguage` / `es-AR` y un `address`/`areaServed` en Organization más allá de `contactPoint.areaServed`.
4. El alt de la imagen OG es el título — está bien, pero un alt descriptivo es marginalmente mejor.

---

## Análisis detallado por categoría

### Citabilidad por IA (62/100)
**Fortalezas:** La `FAQPage` de la home ([src/config/faqs.ts](src/config/faqs.ts)) es el formato más citable que existe en la web — 9 pares de pregunta-respuesta directos con respuestas concisas y autónomas ("Es una plataforma CRM completa: conversaciones por WhatsApp, gestión de leads…"). El artículo del blog está escrito en párrafos declarativos y limpios, cada uno con una afirmación autónoma — realmente extraíble. Las features de precios son listas claras.
**Brechas:** Sin estadísticas, sin pasajes definicionales, sin tablas comparativas. A la IA le encanta el contenido "X vs Y" y "qué es X", y no tenés nada de eso. El copy del hero ("Tu WhatsApp atiende solo") es persuasivo pero no citable como un dato.
**Ejemplo de reescritura:** Agregar un pasaje como *"Un CRM inmobiliario conecta WhatsApp con la gestión de leads, propiedades y visitas en una sola bandeja, para que un equipo comercial no pierda consultas por responder tarde."* — definicional, neutral, citable.

### Autoridad de marca (27/100)
**Mapa:** Sin `sameAs`, así que ni siquiera los perfiles que tengas están vinculados. La búsqueda de categoría por IA devuelve solo competidores. Sin Wikipedia, sin huella detectable en Reddit/YouTube. Como SaaS argentino en etapa temprana esto es esperable — pero las señales on-site que *ayudarían* (sameAs, Nosotros) también están ausentes, así que estás dejando las victorias gratuitas sobre la mesa.
**Prioridad:** Crear y vincular página de empresa en LinkedIn, Instagram y un canal de YouTube (aunque sean 2–3 demos del producto). Sembrar menciones honestas donde están tus compradores (comunidades inmobiliarias de Facebook/WhatsApp, directorios proptech de AR).

### Calidad de contenido E-E-A-T (45/100)
**Confianza:** Buenas bases — política de privacidad, términos y un NAP real (email + teléfono + WhatsApp en [src/config/site.ts](src/config/site.ts)). **Experiencia:** los mockups del producto se ven reales, pero no hay casos de éxito, testimonios ni logos de clientes. **Pericia/Autoridad:** sin página Nosotros, sin autores con nombre, sin credenciales. **Frescura:** el único artículo del blog es actual (15/06/2026) pero el volumen es demasiado bajo para señalar autoridad.

### GEO técnico (78/100)
**Fuerte.** Astro SSG → el HTML en vivo contiene el hero, los precios y la FAQ completos (verificado — no depende de JS), que es exactamente lo que necesitan los crawlers de IA. El `robots.txt` es permisivo y permite todos los crawlers de IA (GPTBot/ClaudeBot/PerplexityBot heredan `User-agent: *`), referencia el sitemap, y `@astrojs/sitemap` está configurado. Canonicals + `trailingSlash: 'always'` consistentes ([src/components/SEO.astro](src/components/SEO.astro)), tarjetas OG/Twitter presentes, HTTPS, JS mínimo. **Única brecha real:** no hay `llms.txt`.

### Schema y datos estructurados (70/100)
**Presente:** Organization, SoftwareApplication (con `offers` + `featureList`), FAQPage en la home; BlogPosting + BreadcrumbList en los artículos ([src/config/schema.ts](src/config/schema.ts)). Set sólido. **Faltante/débil:** `sameAs`, `AggregateRating`, autor `Person`, y cualquier schema en las páginas de precios/audiencias. Precios debería llevar `Offer`/`Product`; las páginas de audiencias deberían llevar `Service` + su propio `FAQPage`.

### Optimización por plataforma (25/100)
Presencia mínima en las plataformas con las que los modelos de IA se entrenan y a las que citan (YouTube, Reddit, LinkedIn, Wikipedia). Ningún `sameAs` apunta a ninguna parte. Es el gemelo externo de Autoridad de marca y mejora a medida que esos puntos se completan.

---

## Victorias rápidas (implementar esta semana)

1. **Agregar `sameAs`** a `organizationSchema` con todos los perfiles que tengas (LinkedIn, Instagram, YouTube, Facebook). ~10 líneas en [src/config/schema.ts](src/config/schema.ts). El mayor ROI para reconocimiento de entidad.
2. **Publicar `public/llms.txt`** — nombre, descripción de una línea, y enlaces a home / precios / para-inmobiliarias / para-desarrolladoras / blog. ~30 min.
3. **Agregar un autor `Person`** a `blogPostingSchema` y una firma visible + bio de 1 línea en la plantilla del artículo.
4. **Poner schema `FAQPage` en la página de precios** (reutilizar `faqSchema`) y agregar schema `Offer`/`Product` desde `plans`.
5. **Publicar un artículo definicional/comparativo** ("Qué es un CRM inmobiliario con IA" o "Waichatt vs atender WhatsApp desde el celular") con 1–2 estadísticas citables y una línea de fuentes.

## Plan de acción a 30 días

### Semana 1: Señales de entidad y técnicas
- [ ] Agregar array `sameAs` al schema de Organization
- [ ] Crear `public/llms.txt`
- [ ] Agregar autor `Person` (schema + firma visible) al blog
- [ ] Agregar schema `Offer`/`Product` + reutilizar `FAQPage` en `/precios/`

### Semana 2: Confianza y E-E-A-T
- [ ] Construir `/nosotros/`: fundadores, ubicación, misión, el problema que resuelven
- [ ] Juntar 3–5 testimonios de clientes; mostrarlos + marcarlos con `Review`/`AggregateRating`
- [ ] Agregar schema `Service` + una pequeña `FAQPage` a `/para-inmobiliarias/` y `/para-desarrolladoras/`

### Semana 3: Contenido citable
- [ ] Publicar un artículo pilar definicional ("Qué es un CRM inmobiliario con IA") con datos + fuentes
- [ ] Publicar un artículo de comparación/guía de compra
- [ ] Agregar un bloque corto de "datos y cifras" / glosario que la IA pueda citar

### Semana 4: Presencia externa
- [ ] Lanzar + vincular página de empresa en LinkedIn e Instagram (ya reflejados en `sameAs`)
- [ ] Publicar 2–3 videos demo del producto en YouTube
- [ ] Sembrar menciones honestas en comunidades y directorios proptech / inmobiliarios de AR

---

## Apéndice: Páginas analizadas

| URL | Título | Problemas GEO |
|---|---|---|
| `/` | Waichatt – Tu WhatsApp inmobiliario atiende solo con IA | Schema de Org sin `sameAs`; sin estadísticas/contenido definicional |
| `/precios/` | Precios de Waichatt – Un plan simple para inmobiliarias | Sin schema `Offer`/`Product`/`FAQPage` |
| `/para-inmobiliarias/` | Waichatt para inmobiliarias – WhatsApp, IA y CRM | Sin schema `Service`/`FAQPage` |
| `/para-desarrolladoras/` | Waichatt para desarrolladoras – Respondé lanzamientos con IA | Sin schema `Service`/`FAQPage` |
| `/blog/` | Blog de Waichatt – WhatsApp, IA y ventas inmobiliarias | Solo breadcrumb; escaso (1 artículo) |
| `/blog/organizar-consultas-whatsapp-inmobiliaria/` | Cómo organizar las consultas de WhatsApp… | Autor es Org, no Person; sin firma visible |
| `/politica-de-privacidad/` | Política de privacidad | OK (señal de confianza) |
| `/terminos-y-condiciones/` | Términos y condiciones | OK (señal de confianza) |

**Notas de fetch:** `/llms.txt` → 404. `robots.txt` → permisivo, sitemap referenciado. HTML de la home en vivo verificado como totalmente renderizado en servidor (contenido presente sin JS).
