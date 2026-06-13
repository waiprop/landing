# Roadmap — Landing comercial Waichatt (Astro)

Objetivo: una landing B2B minimalista, rápida y bien posicionada en Google, pensada para recibir tráfico de publicidad y de búsqueda orgánica, que lleve a inmobiliarias y desarrolladoras a registrarse y probar el sistema.

Color de marca: `#259A72`
Stack recomendado: **Astro**

Las fases están ordenadas para plasmarlas de arriba hacia abajo. Cada una deja algo terminado antes de pasar a la siguiente. Con las fases 0 a 6 ya tenés una landing que posiciona, carga rápido y recibe publicidad. La fase 7 es continua.

---

## Fase 0 — Cimientos (antes de tocar diseño)

Definiciones que condicionan todo lo demás:

- [ ] Público: inmobiliarias + desarrolladoras en una sola home.
- [ ] Objetivo único de la página: que toquen "Probá gratis".
- [ ] URL exacta a la que lleva el botón (registro del sistema).
- [ ] Días reales de prueba gratis.
- [ ] ¿Se muestran precios o no?
- [ ] ¿Hay clientes/testimonios para mostrar, o la sección queda preparada para después?

En Astro:

- [ ] Proyecto nuevo y separado del sistema.
- [ ] Instalar `@astrojs/sitemap`.
- [ ] Conectar deploy a Cloudflare Pages / Vercel / Netlify desde el día uno (preview en vivo de cada cambio).

---

## Fase 1 — Arquitectura de contenido y copy

Secciones de la home, en orden:

1. Hero
2. Problema
3. Módulos del sistema
4. Bloque dual: "Para inmobiliarias" / "Para desarrolladoras"
5. Cómo funciona en 3 pasos
6. Prueba social
7. Precios
8. Cierre
9. FAQ
10. Footer

Tareas:

- [ ] Integrar el copy ya definido y ajustar el hero elegido.
- [ ] Jerarquía SEO: **un solo `<h1>`** (el del hero); el resto `<h2>`/`<h3>` en orden lógico.
- [ ] Dejar preparada la estructura de carpetas para páginas hijas (aunque no se hagan ahora): `/precios`, `/para-inmobiliarias`, `/para-desarrolladoras`, `/blog`.

---

## Fase 2 — Sistema de diseño

- [ ] Paleta como variables CSS: verde `#259A72` y su escala (tinte claro, hover oscuro, texto verde fuerte) + neutros.
- [ ] Una sola tipografía, dos pesos (regular y medium).
- [ ] Componentes base reutilizables: botón primario, botón secundario, tarjeta, badge, contenedor de sección.

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

---

## Fase 3 — Mostrar el sistema (confianza)

La fase que más convierte.

- [ ] Capturas reales del sistema con datos de demo prolijos (nombres y propiedades ficticias pero creíbles), dentro de mockups de navegador/celular.
- [ ] Video principal de 60–90 s: flujo completo "consulta entra → IA responde → se crea lead → se agenda visita".
- [ ] Videos cortos en loop de 10–20 s por módulo (Conversaciones, Agente IA, CRM, Propiedades, Calendario, Dashboard, Campañas).

Técnico:

- [ ] Videos **nunca** alojados en el propio servidor → YouTube/Vimeo embebido, o Mux / Cloudflare Stream para algo más profesional.
- [ ] Imágenes pasadas por el componente `<Image />` de Astro (convierte a WebP/AVIF y sirve el tamaño justo).
- [ ] Cada imagen con su `alt` describiendo qué módulo muestra.

---

## Fase 4 — SEO técnico

- [ ] Meta description por página.
- [ ] Open Graph completo (título, descripción e imagen) + Twitter Card (para que el link se vea bien al compartirlo y en los anuncios).
- [ ] Datos estructurados schema.org: `SoftwareApplication` y `Organization`.
- [ ] `sitemap.xml` (la genera el plugin) y `robots.txt`.
- [ ] URLs limpias y descriptivas.
- [ ] Canonical tags.
- [ ] Componente `<SEO />` reutilizable en Astro: cada página le pasa título, descripción e imagen (así no se olvida ninguna).

---

## Fase 5 — Velocidad

Objetivo: Core Web Vitals en verde (factor de ranking de Google).

- [ ] Medir con PageSpeed Insights y trabajar sobre lo que marque.
- [ ] Lazy-loading en imágenes y videos debajo del pliegue.
- [ ] Fuentes con `font-display: swap`.
- [ ] Cero JavaScript en lo que no lo necesite (Astro ya ayuda).
- [ ] Contenido importante en el HTML aunque el JS no corra (la animación es un agregado, no un requisito para ver el contenido).

---

## Fase 6 — Listo para publicidad y medición

Antes de gastar en ads:

- [ ] La landing capaz de recibir parámetros UTM.
- [ ] Píxel de Meta instalado.
- [ ] Google Analytics 4 instalado.
- [ ] Evento de conversión configurado (clic en "Probá gratis" o registro completado).
- [ ] Mensaje del anuncio = mensaje del hero (si el ad promete "automatizá tu WhatsApp", el hero repite esa promesa).
- [ ] Probar la página en celular real, no solo en la compu.

---

## Fase 7 — Crecimiento orgánico (después de lanzar)

Continuo, se alimenta con el sitio ya en vivo.

- [ ] Activar el blog con constancia (Astro content collections + Markdown).
- [ ] Artículos que respondan lo que el cliente busca en Google. Ejemplos:
  - "Cómo organizar las consultas de WhatsApp de una inmobiliaria"
  - "Qué es un CRM inmobiliario"
  - "Vender en pozo: cómo no perder interesados"
- [ ] Lanzar páginas hijas `/para-inmobiliarias` y `/para-desarrolladoras`.
- [ ] Apuntar cada campaña de ads a su página hija (convierten mejor que mandar todo a la home).

---

## Consejo de secuencia

No esperar a tener todo perfecto para lanzar. Con las fases 0 a 6 terminadas ya hay una landing que posiciona, carga rápido y recibe publicidad. La fase 7 es continua.
