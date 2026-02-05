# MANEXIS · Landing en Astro + Tailwind

Sitio publicitario para la consultora de software MANEXIS. Incluye hero, servicios, planes de precios, portafolio y contacto con WhatsApp y formulario listo para Netlify Forms.

## Requisitos previos

- Node 18+ (se usa npm)

## Uso rápido

```sh
npm install
npm run dev    # http://localhost:4321
npm run build  # genera dist/
npm run preview
```

## Ajustes rápidos

- WhatsApp: actualiza el enlace en `src/pages/index.astro` (variable `whatsappLink`).
- Marca y textos: todo el contenido vivo está en `src/pages/index.astro`.
- Estilos globales: `src/styles/global.css` (paleta GitHub + acentos tipo Duolingo).

## Despliegue en Netlify

- Archivo `netlify.toml` ya configurado con `npm run build` y publish `dist`.
- El formulario de contacto usa Netlify Forms (`data-netlify="true"`).

## Estructura

```
src/
├─ layouts/BaseLayout.astro
└─ pages/index.astro
```
