# Deploy de la landing Waichatt

La landing compila como sitio estático con Astro:

```sh
pnpm build
```

El output queda en `dist/`.

## Variables

Configurar estas variables en el proveedor de deploy:

```sh
PUBLIC_SITE_URL=https://waichatt.com
PUBLIC_GA_MEASUREMENT_ID=
PUBLIC_META_PIXEL_ID=
```

`PUBLIC_SITE_URL` se usa para sitemap y URLs canónicas. Si el dominio final no es `waichatt.com`, cambiarlo también en `public/robots.txt` y `src/config/site.ts`.

## Proveedores

- Cloudflare Pages: build command `pnpm build`, output `dist`.
- Vercel: framework `Astro`, build command `pnpm build`, output `dist`.
- Netlify: build command `pnpm build`, publish directory `dist`.

Cuando el repositorio quede conectado al proveedor, cada pull request debería generar un preview deploy automático.
