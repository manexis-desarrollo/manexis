# Analisis del proyecto (Context7)

Fecha: 2026-02-10

## Resumen ejecutivo
- Proyecto Astro + Tailwind para landing estatica con despliegue en Netlify.
- Estructura simple, sin backend propio; el formulario usa Netlify Forms.
- Hay oportunidades claras en SEO, performance, accesibilidad, y hardening de seguridad.

## Tecnologias detectadas
- Astro 5 y Vite con plugin de Tailwind 4. Ver [package.json](package.json) y [astro.config.mjs](astro.config.mjs).
- Tailwind CSS importado desde CSS global. Ver [src/styles/global.css](src/styles/global.css).
- Netlify como plataforma de build y publish. Ver [netlify.toml](netlify.toml).
- TypeScript config estricto via preset de Astro. Ver [tsconfig.json](tsconfig.json).

## Hallazgos y oportunidades de mejora
### SEO y contenido
- Falta definir `site` en la configuracion de Astro. Esto ayuda a canonic, sitemap y URLs absolutas. Ver [astro.config.mjs](astro.config.mjs). Context7 sugiere configurar `site` para sitemap/canonical. Fuente: Astro docs (Configuring Astro).
- El sitemap actual incluye anchors (por ejemplo `/#servicios`). Eso no es valido para sitemaps; deberian ser rutas reales sin fragmento. Ver [src/pages/sitemap.xml.js](src/pages/sitemap.xml.js).
- `og:image` por defecto apunta a `'/favicon.svg'`. Conviene usar una imagen 1200x630 real para compartir en redes. Ver [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro).

### Accesibilidad
- El menu movil no actualiza `aria-expanded` ni `aria-controls`. Eso afecta lectores de pantalla. Ver [src/pages/index.astro](src/pages/index.astro).
- Los botones de tema duplicados (header y flotantes) podrian usar `aria-pressed` para reflejar estado. Ver [src/pages/index.astro](src/pages/index.astro).

### Performance y calidad
- Se usa `@import` a Google Fonts desde CSS global, lo cual puede ser render-blocking y expone requests a terceros. Considerar self-host de fuentes o `@font-face` local. Ver [src/styles/global.css](src/styles/global.css).
- Hay un bloque grande de CSS para precios animados que no se usa en el markup actual (no hay clases `pricing-*` en el HTML). Conviene eliminarlo o documentarlo. Ver [src/styles/global.css](src/styles/global.css).

### Mantenibilidad
- Toda la data y copy esta hardcodeada en una sola pagina. Para crecer, considerar mover contenido a archivos JSON/TS o collections de Astro. Ver [src/pages/index.astro](src/pages/index.astro).
- No hay scripts de lint/format ni CI. Esto limita control de calidad. Ver [package.json](package.json).

## Seguridad y privacidad
- El formulario carece de honeypot anti-spam de Netlify. Recomendado agregar `netlify-honeypot` y campo oculto. Ver [src/pages/index.astro](src/pages/index.astro).
- No hay headers de seguridad en Netlify (CSP, HSTS, X-Content-Type-Options). Recomendado agregarlos en [netlify.toml](netlify.toml).
- Se inyecta SVG con `set:html`. Hoy los valores son constantes internas, pero si algun dia vienen de contenido dinamico, puede abrir XSS. Ver [src/pages/index.astro](src/pages/index.astro).

## Cosas que estan mal (o riesgos)
- Sitemap con anchors: los motores ignoran fragments y puede generar URLs duplicadas o inconsistentes. Ver [src/pages/sitemap.xml.js](src/pages/sitemap.xml.js).
- `site` ausente en Astro: los canonical pueden no ser consistentes con el dominio final, especialmente si cambia `base` o `trailingSlash`. Ver [astro.config.mjs](astro.config.mjs).

## Recomendaciones priorizadas
1) Definir `site` y (si aplica) `trailingSlash` en [astro.config.mjs](astro.config.mjs). Basado en Astro docs (Context7).
2) Ajustar el sitemap para solo rutas reales, o usar `@astrojs/sitemap`.
3) Agregar headers de seguridad en [netlify.toml](netlify.toml) (CSP, HSTS, X-Frame-Options, X-Content-Type-Options).
4) Agregar honeypot a Netlify Forms para reducir spam.
5) Mejorar accesibilidad del menu movil con `aria-expanded` y `aria-controls`.
6) Considerar self-host de fuentes y revisar CSS no usado.

## Referencias Context7
- Astro: Configuracion `site` para URLs canonicas/sitemap (Astro docs).
- Astro: Deploy en Netlify via `netlify.toml` (Astro docs).
- Tailwind: Uso del plugin `@tailwindcss/vite` y `@import "tailwindcss"` (Tailwind docs).
