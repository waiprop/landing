# Roadmap SEO/GEO — Waichatt

**Objetivo:** Llevar el SEO/GEO de Waichatt de **51/100 a 90+/100**, optimizado tanto para buscadores tradicionales (Google) como para motores generativos (ChatGPT, Claude, Perplexity, Gemini, Google AI Overviews).
**Mercado objetivo:** España + LATAM (es-ES / es-419 / es-AR).
**Off-site:** Presencia social ya sólida → foco en conectarla, link building, listados de software y menciones.
**Fecha:** 25/06/2026 · **Horizonte:** 90 días + mantenimiento continuo.

---

## 0. Cómo medimos "100%"

No existe un "100%" absoluto en SEO; definimos *done* con KPIs concretos:

| KPI | Baseline (hoy) | Meta 90 días |
|---|---|---|
| Puntaje GEO (este informe) | 51/100 | ≥ 90/100 |
| Citada en respuestas de IA para la categoría | No aparece | Citada en ≥ 3 de 5 motores para consultas core |
| Páginas indexadas (Search Console) | ~8 | 30+ (con cluster de contenido) |
| Keywords en top 10 (es-ES + es-419) | ~0 | 15+ keywords objetivo |
| Backlinks de dominios referentes | ~0 | 20+ DR>20 |
| Presencia en directorios de software (G2/Capterra/GetApp) | 0 | 3+ listados completos |
| Core Web Vitals (campo, Google) | sin medir | LCP <2,5s · INP <200ms · CLS <0,1 (todos "Good") |
| Búsquedas de marca / mes | bajo | crecimiento sostenido |

**Herramientas de medición:** Google Search Console, Bing Webmaster Tools, PageSpeed Insights/CrUX, Ahrefs o Semrush (rank + backlinks), y monitoreo manual de citaciones en ChatGPT/Claude/Perplexity/Gemini con un set fijo de prompts (ver §7).

---

## 1. Estado actual (baseline)

**Lo que ya está bien — no tocar, solo mantener:**
- Astro SSG → HTML 100% renderizado en servidor (ideal para crawlers de IA). Verificado en vivo.
- `robots.txt` permisivo + sitemap automático (`@astrojs/sitemap`).
- Canonicals consistentes + `trailingSlash: 'always'` ([src/components/SEO.astro](src/components/SEO.astro)).
- Set de schema base: Organization, SoftwareApplication, FAQPage, BlogPosting, BreadcrumbList ([src/config/schema.ts](src/config/schema.ts)).
- OG + Twitter cards, HTTPS, JS mínimo.

**Las 4 brechas estructurales que ataca este roadmap:**
1. **Autoridad/entidad nula** → invisible en respuestas de IA de su categoría.
2. **Targeting solo es-AR** → para ES+LATAM falta internacionalización y el copy tiene argentinismos.
3. **Contenido escaso** (1 artículo) → sin autoridad temática ni material citable.
4. **E-E-A-T débil** → sin "Nosotros", sin autores, sin pruebas sociales.

---

## 2. Los 6 pilares

| # | Pilar | Qué cubre | Peso GEO |
|---|---|---|---|
| 1 | **Infraestructura técnica** | Rendimiento (CWV), rendering, sitemap avanzado, `llms.txt`, accesibilidad, 404/redirects | Alto |
| 2 | **Datos estructurados** | sameAs, WebSite+SearchAction, Product/Offer, Service, AggregateRating, Person, Article | Alto |
| 3 | **Internacionalización (ES+LATAM)** | Arquitectura de idiomas, hreflang, neutralización del español, señales por región | Crítico (nuevo) |
| 4 | **Contenido & citabilidad** | Clusters temáticos, pillar pages, formato citable (definiciones, datos, comparativas, FAQ) | Crítico |
| 5 | **E-E-A-T & confianza** | Nosotros, autores, testimonios, casos de éxito, credenciales | Alto |
| 6 | **Autoridad off-site & GEO** | Listados de software, link building, PR digital, Wikidata, plataformas que la IA cita | Crítico |

---

## 3. Roadmap por fases

> Tags: **[CÓDIGO]** = lo implemento yo en el repo · **[CONTENIDO]** = redacción/estrategia · **[OFF-SITE]** = acciones fuera del sitio (las ejecuta el equipo).

### Fase 0 — Fundaciones técnicas y de entidad (Semana 1)
*Objetivo: cerrar las brechas baratas de mayor ROI y dejar la base para todo lo demás.*

| Tarea | Tipo | Detalle | Criterio de aceptación |
|---|---|---|---|
| `sameAs` en Organization | [CÓDIGO] | Agregar array con LinkedIn, Instagram, YouTube, Facebook, X en [src/config/schema.ts](src/config/schema.ts) | El schema valida en Rich Results Test y enlaza los perfiles reales |
| `WebSite` schema + `SearchAction` | [CÓDIGO] | Nuevo schema global con `inLanguage` y datos de marca | Aparece en validador; refuerza entidad de marca |
| `public/llms.txt` | [CÓDIGO] | Nombre, descripción, enlaces a páginas clave (home, precios, audiencias, blog) | Accesible en `/llms.txt`, sin 404 |
| `public/llms-full.txt` | [CÓDIGO] | Versión extendida con resumen de cada página | Accesible, formato válido |
| robots.txt: bots de IA explícitos | [CÓDIGO] | `Allow` explícito para GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, Bingbot | Decisión consciente por bot (no solo `*`) |
| Página 404 + página de error | [CÓDIGO] | 404 útil con enlaces de navegación | `/inexistente` devuelve 404 con UI propia |
| `Person` autor en blog | [CÓDIGO] | `blogPostingSchema` con `Person` real + firma visible en [src/pages/blog/[slug].astro](src/pages/blog/[slug].astro) | Autor con nombre y bio aparece en página y schema |

**Impacto estimado:** Técnico 78→90, Schema 70→82. GEO global ~51→~57.

---

### Fase 1 — Schema completo + E-E-A-T on-site (Semanas 2–4)
*Objetivo: que cada página tenga su schema correcto y que el sitio transmita confianza (clave para que la IA recomiende un SaaS de pago).*

| Tarea | Tipo | Detalle | Criterio de aceptación |
|---|---|---|---|
| Página `/nosotros/` | [CÓDIGO]+[CONTENIDO] | Fundadores, historia, ubicación, misión, el problema que resuelven, foto del equipo | Indexable, con schema `AboutPage` + `Organization` |
| Schema `Offer`/`Product` en precios | [CÓDIGO] | Desde `plans` en [src/pages/precios.astro](src/pages/precios.astro) | Precio, moneda, prueba gratis en datos estructurados |
| Schema `Service` en páginas de audiencia | [CÓDIGO] | `Service` en para-inmobiliarias y para-desarrolladoras | Valida; describe el servicio por segmento |
| `FAQPage` en precios y audiencias | [CÓDIGO]+[CONTENIDO] | FAQ propia por página (no solo home) | 4–6 Q&A por página con schema |
| Testimonios + `Review`/`AggregateRating` | [CÓDIGO]+[OFF-SITE] | Recolectar 5–8 testimonios reales, mostrarlos y marcarlos | `AggregateRating` válido en home y precios |
| Sección de casos de éxito | [CONTENIDO] | 2–3 casos con métricas (antes/después) | Página `/casos/` con datos citables |
| Logos de clientes | [OFF-SITE]+[CÓDIGO] | Conseguir permiso + mostrar logos | Banda de confianza en home |
| `BreadcrumbList` en todas las páginas | [CÓDIGO] | Extender breadcrumbs más allá del blog | Migas en todas las páginas internas |

**Impacto estimado:** E-E-A-T 45→72, Schema 82→90. GEO global ~57→~66.

---

### Fase 2 — Internacionalización ES + LATAM (Mes 2)
*Objetivo: dejar de ser un sitio "solo AR" y poder rankear/ser citado en España y toda LATAM. Esta fase requiere una decisión de arquitectura (ver §4).*

| Tarea | Tipo | Detalle | Criterio de aceptación |
|---|---|---|---|
| **Decisión de arquitectura i18n** | [CÓDIGO] | Single-site español neutro vs. subcarpetas por región (ver §4 — recomiendo arrancar neutro) | Arquitectura definida y documentada |
| Neutralizar el español del copy | [CONTENIDO]+[CÓDIGO] | Quitar voseo/argentinismos: "Centralizá→Centraliza", "Empezá→Empieza", "respondelas→respóndelas", "conviene avisarte" etc. en todos los componentes | Copy en español neutro, sin marcas regionales fuertes |
| `hreflang` + `og:locale` correctos | [CÓDIGO] | Self-referencing hreflang (`es`, o `es-ES`/`es-419` si se separa) en [src/components/SEO.astro](src/components/SEO.astro) | hreflang válido en Search Console |
| `areaServed` ampliado en schema | [CÓDIGO] | De `AR` a la lista de países objetivo (ES, MX, CO, CL, AR…) | Schema refleja cobertura real |
| Contacto/horarios por región | [CÓDIGO]+[OFF-SITE] | Considerar número/horario local o formulario; evitar mostrar solo +54 como única señal | Señales de servicio no exclusivamente AR |
| Integraciones por mercado en contenido | [CONTENIDO] | ES: Idealista/Fotocasa/Inmovilla · LATAM: Tokko, etc. | Mencionado en páginas y FAQ relevantes |
| Sitemap + Search Console por región | [CÓDIGO]+[OFF-SITE] | Propiedades en GSC, targeting si aplica | Cobertura monitoreada por país |

**Impacto estimado:** habilita el crecimiento de tráfico/citación en ES+LATAM (multiplica el alcance, base para Fase 3). Citabilidad y Plataforma empiezan a moverse cuando el contenido de Fase 3 entra.

---

### Fase 3 — Motor de contenido y citabilidad (Mes 2–3, arranca solapado con Fase 2)
*Objetivo: construir autoridad temática y material que la IA quiera citar. Es el pilar de mayor impacto en GEO.*

**Estrategia: 6 clusters temáticos**, cada uno con 1 *pillar page* (guía completa, 1.500–2.500 palabras) + 4–6 artículos de apoyo enlazados.

| Cluster | Pillar page | Ejemplos de artículos de apoyo |
|---|---|---|
| CRM inmobiliario | "Qué es un CRM inmobiliario con IA (guía 2026)" | Cómo elegirlo · CRM vs planilla · funciones imprescindibles · comparativas |
| WhatsApp para inmobiliarias | "WhatsApp para inmobiliarias: guía completa" | WhatsApp Business API · plantillas · automatización · tiempos de respuesta |
| Agente IA inmobiliario | "Agente de IA para inmobiliarias: cómo funciona" | Calificación de leads con IA · chatbot vs agente · casos · límites |
| Captación y gestión de leads | "Cómo captar y gestionar leads inmobiliarios" | Pipeline · seguimiento · scoring · no perder consultas |
| Operación y equipos | "Cómo organizar el equipo comercial inmobiliario" | Asignación de leads · agenda de visitas · reportes |
| Desarrolladoras / lanzamientos | "Cómo responder un lanzamiento inmobiliario sin saturar al equipo" | Picos de demanda · preventa · multiagente |

**Reglas de citabilidad GEO en cada pieza** (esto es lo que hace que la IA cite):
- Intro **definicional** ("X es…") en las primeras 2 frases.
- **Datos y estadísticas con fuente citada** (ej. "el 67% de las interacciones inmobiliarias empiezan en WhatsApp [fuente]").
- Al menos una **tabla comparativa**.
- **Bloque FAQ** con `FAQPage` schema en cada artículo.
- Afirmaciones **autónomas y neutrales** (citables fuera de contexto).
- **Fecha de actualización** visible + `dateModified` en schema.
- Encabezados en forma de **pregunta** donde aplique (matchea queries conversacionales).

| Tarea | Tipo | Criterio de aceptación |
|---|---|---|
| Definir calendario editorial (12 semanas) | [CONTENIDO] | 6 pillar + ~12 artículos planificados con keyword objetivo |
| Plantilla de artículo con schema Article+FAQ | [CÓDIGO] | Cada post nuevo trae Article + FAQPage + Person + breadcrumb |
| Publicar 6 pillar pages | [CONTENIDO] | Indexadas, con formato citable completo |
| Publicar 1–2 artículos/semana | [CONTENIDO] | Cadencia sostenida 12 semanas |
| Página comparativa "Waichatt vs alternativas" | [CONTENIDO] | Tabla objetiva; alto valor de citación para queries "mejor CRM…" |
| Bloque glosario/"datos del sector" | [CÓDIGO]+[CONTENIDO] | Página de cifras citables con fuentes |
| Enlazado interno por cluster | [CÓDIGO]+[CONTENIDO] | Pillar↔apoyo enlazados en ambos sentidos |

**Impacto estimado:** Citabilidad 62→88, Contenido E-E-A-T 72→85. GEO global ~66→~80.

---

### Fase 4 — Autoridad off-site y GEO (Mes 3 en adelante)
*Objetivo: que entidades de terceros confirmen a Waichatt como referente. Lo que más mueve "Autoridad de marca" y "Plataforma", hoy en 27 y 25.*

| Tarea | Tipo | Por qué importa para GEO | Criterio de aceptación |
|---|---|---|---|
| Listados en G2, Capterra, GetApp, Software Advice | [OFF-SITE] | La IA cita masivamente estos directorios para "mejor software de X". Crítico para un SaaS. | 3+ listados completos con reseñas |
| Listados en directorios LATAM/ES (Comparasoftware, etc.) | [OFF-SITE] | Cobertura regional para el mercado objetivo | 2+ listados regionales |
| Conectar perfiles sociales (sameAs) | [CÓDIGO]+[OFF-SITE] | Ya tenés presencia sólida → falta vincularla y optimizar bios para entidad | Perfiles enlazados y consistentes (NAP) |
| Entidad en Wikidata + Crunchbase | [OFF-SITE] | Fuentes que alimentan knowledge graphs y modelos de IA | Ficha publicada y aprobada |
| Campaña de link building / PR digital | [OFF-SITE]+[CONTENIDO] | Backlinks de medios proptech/inmobiliarios ES+LATAM | 20+ dominios referentes DR>20 |
| Guest posts en medios del sector | [CONTENIDO]+[OFF-SITE] | Autoridad + menciones citables | 4–6 publicaciones |
| Presencia en YouTube (demos) | [OFF-SITE] | YouTube es fuente frecuente de citación de IA | 3–5 videos demo indexados |
| Menciones en Reddit/comunidades | [OFF-SITE] | Reddit muy citado por la IA; señales de uso real | Participación honesta en hilos relevantes |
| Reseñas reales de clientes | [OFF-SITE] | Alimenta AggregateRating + confianza | 15+ reseñas distribuidas |

**Impacto estimado:** Autoridad de marca 27→75, Plataforma 25→78. GEO global ~80→~90+.

---

### Fase 5 — Medición, iteración y mantenimiento (continuo)

| Tarea | Tipo | Cadencia |
|---|---|---|
| Monitoreo de citación en IA (set fijo de prompts) | [OFF-SITE] | Mensual (ver §7) |
| Revisión de Core Web Vitals + rendimiento | [CÓDIGO] | Mensual |
| Search Console: cobertura, queries, CTR | [OFF-SITE] | Quincenal |
| Actualizar contenido (dateModified, refresh) | [CONTENIDO] | Trimestral |
| Re-auditoría GEO (este informe) | [CÓDIGO] | Mensual — comparar delta |
| Nuevos artículos/clusters según gaps | [CONTENIDO] | Continuo |

---

## 4. Decisión de arquitectura: internacionalización

Para España + LATAM hay tres caminos. **Recomendación: empezar por el A y escalar al B cuando el volumen lo justifique** (evita mantener N copias de cada página antes de tener tráfico que lo pague).

| Opción | Qué es | Pro | Contra | Cuándo |
|---|---|---|---|---|
| **A. Español neutro, un solo sitio** | Un set de URLs, copy sin regionalismos, `hreflang="es"` self-referencing | Mínimo mantenimiento, rápido, sin contenido duplicado | Sin optimización fina por país | **Ahora** (recomendado) |
| **B. Subcarpetas por región** | `/es-es/`, `/es-419/` (o `/mx/`, `/ar/`) con i18n routing de Astro + hreflang | Targeting fino por país, mejor para queries locales | Mantener varias copias, más complejidad | Cuando haya tráfico/contenido que lo justifique |
| **C. Dominios por país** | `.es`, `.com.mx`, etc. | Máxima señal local | Carísimo de mantener y construir autoridad por separado | Solo a gran escala |

**Acción inmediata (independiente de la opción):** neutralizar el voseo/argentinismos del copy. Hoy todo el sitio usa "Centralizá / Empezá / respondelas / gestioná", que en España y la mayor parte de LATAM suena ajeno. Esto es lo primero, sin importar la arquitectura que se elija.

---

## 5. Resumen priorizado (esfuerzo × impacto)

| Prioridad | Tarea | Esfuerzo | Impacto | Tipo |
|---|---|---|---|---|
| 🔴 1 | `sameAs` + WebSite schema + llms.txt | Bajo | Alto | CÓDIGO |
| 🔴 2 | Neutralizar copy (ES+LATAM) | Medio | Alto | CONTENIDO+CÓDIGO |
| 🔴 3 | Página Nosotros + autores + testimonios | Medio | Alto | CÓDIGO+CONTENIDO |
| 🔴 4 | Schema en precios/audiencias (Offer/Service/FAQ) | Bajo | Alto | CÓDIGO |
| 🔴 5 | 6 pillar pages + citabilidad | Alto | Muy alto | CONTENIDO |
| 🟠 6 | Listados G2/Capterra/GetApp | Medio | Muy alto | OFF-SITE |
| 🟠 7 | hreflang + arquitectura i18n | Medio | Alto | CÓDIGO |
| 🟠 8 | Link building / PR | Alto | Alto | OFF-SITE |
| 🟡 9 | Wikidata/Crunchbase + YouTube + Reddit | Medio | Medio | OFF-SITE |
| 🟡 10 | Medición continua + re-auditoría | Bajo | Medio | mixto |

---

## 6. Trayectoria del puntaje GEO

| Hito | GEO global | Driver principal |
|---|---|---|
| Hoy | 51 | baseline |
| Fin Fase 0 | ~57 | entidad + técnico |
| Fin Fase 1 | ~66 | schema + confianza |
| Fin Fase 2 | ~66 (habilitador) | i18n abre el mercado |
| Fin Fase 3 | ~80 | contenido citable |
| Fin Fase 4 | **90+** | autoridad off-site |

---

## 7. Set de prompts para monitorear citación en IA

Probar mensualmente en ChatGPT, Claude, Perplexity, Gemini y Google AI Overviews; registrar si Waichatt aparece y en qué posición:

1. "¿Cuál es el mejor CRM de WhatsApp para inmobiliarias?"
2. "Software para gestionar consultas de WhatsApp en una inmobiliaria"
3. "Herramientas de IA para responder leads inmobiliarios automáticamente"
4. "CRM inmobiliario con agente IA en WhatsApp en [España / México / Argentina]"
5. "Cómo automatizar la atención de WhatsApp en una inmobiliaria"

> Meta 90 días: aparecer en ≥ 3 de 5 motores para al menos 3 de estos prompts.

---

## 8. Qué puedo implementar yo ahora (on-site/código)

Listo para arrancar por la **Fase 0** completa (`sameAs`, WebSite schema, `llms.txt`, robots por bot, 404, autor Person) y seguir con el schema de Fase 1 y la neutralización de copy. El contenido (clusters, artículos) y lo off-site (directorios, PR, redes) los redactamos/coordinamos juntos: yo dejo las plantillas y el andamiaje de schema; el equipo aporta testimonios, casos y la ejecución externa.
