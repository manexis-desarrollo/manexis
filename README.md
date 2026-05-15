# MANEXIS Site

Landing corporativa de MANEXIS construida con **Astro + Tailwind CSS**.

## Stack Tecnológico

- [Astro](https://astro.build/) 5.x
- [Tailwind CSS](https://tailwindcss.com/) 4.x (via `@tailwindcss/vite`)
- [pnpm](https://pnpm.io/) como gestor de paquetes
- Prettier + plugin de Astro

## Requisitos

- Node.js >= 24.0.0
- pnpm >= 10.0.0

## Inicio Rápido

### 1. Instalar dependencias

```sh
pnpm install
```

### 2. Desarrollo local

```sh
pnpm run dev
```

Sitio disponible en `http://localhost:4321`.

### 3. Build de producción

```sh
pnpm run build
```

Salida generada en `dist/`.

### 4. Preview local del build

```sh
pnpm run preview
```

## Scripts Disponibles

| Script               | Descripción                                     |
| -------------------- | ----------------------------------------------- |
| `pnpm run dev`       | Levanta el servidor de desarrollo               |
| `pnpm run build`     | Compila el sitio estático para producción       |
| `pnpm run preview`   | Sirve localmente el build generado              |
| `pnpm run lint`      | Ejecuta `astro check` (tipos y linting)         |
| `pnpm run format`    | Formatea el proyecto con Prettier               |
| `pnpm run format:check` | Verifica formato sin modificar archivos      |

## Estructura del Proyecto

```
.
├─ public/
│  ├─ images/
│  │  ├─ logos/
│  │  └─ og-image.svg
│  └─ robots.txt
├─ src/
│  ├─ data/
│  │  └─ landingContent.ts     ← contenido de negocio (nav, servicios, planes, FAQ…)
│  ├─ layouts/
│  │  └─ BaseLayout.astro      ← metadatos, SEO, Open Graph
│  ├─ pages/
│  │  ├─ index.astro           ← página principal
│  │  └─ sitemap.xml.js        ← sitemap dinámico
│  └─ styles/
│     └─ global.css            ← estilos base y tipografía
├─ astro.config.mjs
├─ package.json
└─ tsconfig.json
```

## Dónde Editar Cada Cosa

| Qué quieres cambiar          | Archivo                           |
| ---------------------------- | --------------------------------- |
| Navegación, servicios, planes, FAQ, WhatsApp | `src/data/landingContent.ts` |
| Metadatos, SEO, Open Graph   | `src/layouts/BaseLayout.astro`    |
| Secciones visuales, formulario | `src/pages/index.astro`         |
| Estilos globales / tipografía | `src/styles/global.css`          |

## Troubleshooting

### Error por versión de Node o pnpm

```sh
node -v   # debe ser >= 24
pnpm -v   # debe ser >= 10
```

### Warning de scripts bloqueados en pnpm

```sh
pnpm approve-builds
```

## Licencia

Uso interno de MANEXIS salvo que se indique otra licencia de forma explícita.
