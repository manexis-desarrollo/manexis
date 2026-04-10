# MANEXIS Site

Landing corporativa de MANEXIS construida con Astro + Tailwind, optimizada para Netlify y enfocada en:

- Presentacion de servicios
- Conversion por WhatsApp y formulario
- SEO tecnico base
- Buenas practicas de seguridad en cabeceras HTTP

## 1. Vision General

Este repositorio contiene un sitio estatico con una sola pagina principal y secciones de servicios, planes, proyectos, FAQ y contacto.

No incluye backend propio. El formulario de contacto se procesa con Netlify Forms.

## 2. Stack Tecnologico

- Astro 5.16.11
- Tailwind CSS 4.1.18
- Vite via `@tailwindcss/vite`
- Prettier + plugin de Astro
- CI con GitHub Actions
- Despliegue en Netlify

## 3. Requisitos

- Node.js >= 24.0.0
- pnpm >= 10.0.0

Versiones de referencia validadas en este proyecto:

- Node 24.14.0
- pnpm 10.8.1

## 4. Inicio Rapido

### 4.1 Instalar dependencias

```sh
pnpm install
```

### 4.2 Desarrollo local

```sh
pnpm run dev
```

Sitio disponible en:

- http://localhost:4321

### 4.3 Build de produccion

```sh
pnpm run build
```

Salida generada en:

- `dist/`

### 4.4 Preview local de produccion

```sh
pnpm run preview
```

## 5. Scripts Disponibles

| Script | Descripcion |
|---|---|
| `pnpm run dev` | Levanta servidor de desarrollo con Astro |
| `pnpm run build` | Compila el sitio estatico para produccion |
| `pnpm run preview` | Sirve localmente el build generado |
| `pnpm run lint` | Ejecuta `astro check` (lint y chequeo de tipos) |
| `pnpm run check` | Alias de `astro check` |
| `pnpm run format` | Formatea el proyecto con Prettier |
| `pnpm run format:check` | Verifica formato sin modificar archivos |

## 6. Estructura del Proyecto

```txt
.
├─ public/
│  ├─ images/
│  │  ├─ logos/
│  │  └─ og-image.svg
│  └─ robots.txt
├─ src/
│  ├─ data/
│  │  └─ landingContent.ts
│  ├─ layouts/
│  │  └─ BaseLayout.astro
│  ├─ pages/
│  │  ├─ index.astro
│  │  └─ sitemap.xml.js
│  └─ styles/
│     └─ global.css
├─ .github/workflows/ci.yml
├─ astro.config.mjs
├─ netlify.toml
└─ package.json
```

## 7. Donde Editar Cada Cosa

### 7.1 Contenido de negocio

Archivo principal:

- `src/data/landingContent.ts`

Aqui puedes modificar:

- Navegacion
- Servicios
- Planes
- Proyectos
- FAQ
- Link de WhatsApp (`whatsappLink`)

### 7.2 Layout, metadatos y SEO

Archivo:

- `src/layouts/BaseLayout.astro`

Incluye:

- Canonical dinamico
- Open Graph / Twitter cards
- JSON-LD de organizacion

### 7.3 Vista principal

Archivo:

- `src/pages/index.astro`

Incluye:

- Secciones visuales
- Accesibilidad de menu y botones de tema
- Formulario con Netlify Forms + honeypot anti-spam

### 7.4 Estilos globales

Archivo:

- `src/styles/global.css`

Incluye:

- Estilos base
- Tipografia via `@fontsource/space-grotesk`

## 8. SEO y Descubrimiento

### 8.1 Configuracion de sitio

Archivo:

- `astro.config.mjs`

Configurado con:

- `site: https://manexis.com`
- `trailingSlash: always`

### 8.2 Open Graph

Imagen por defecto para compartir:

- `public/images/og-image.svg`

### 8.3 Sitemap

Generado desde:

- `src/pages/sitemap.xml.js`

Rutas actuales incluidas:

- `/`

### 8.4 Robots

Archivo:

- `public/robots.txt`

## 9. Formulario de Contacto

El formulario usa Netlify Forms en `src/pages/index.astro` con:

- `data-netlify="true"`
- `name="contacto"`
- `form-name` oculto
- `netlify-honeypot="bot-field"`

Para que Netlify lo detecte correctamente:

1. Mantener el formulario en HTML renderizado durante build.
2. Verificar en Netlify Dashboard > Forms tras el primer deploy.

## 10. Seguridad

Cabeceras definidas en `netlify.toml`:

- Content-Security-Policy
- Strict-Transport-Security
- X-Content-Type-Options
- X-Frame-Options
- Referrer-Policy
- Permissions-Policy

Nota:

- La CSP permite `unsafe-inline` en script/style por compatibilidad actual del sitio.

## 11. CI (Integracion Continua)

Workflow:

- `.github/workflows/ci.yml`

Pipeline:

1. Checkout
2. Setup pnpm
3. Setup Node 24
4. `pnpm install --frozen-lockfile`
5. `pnpm run lint`
6. `pnpm run build`

## 12. Despliegue en Netlify

Configuracion en `netlify.toml`:

- Build command: `pnpm run build`
- Publish directory: `dist`
- Node: `24`
- `SITE_URL` en entorno de build

Flujo recomendado:

1. Conectar repo en Netlify.
2. Confirmar que detecta `netlify.toml`.
3. Ejecutar deploy.
4. Verificar pagina, formulario y cabeceras.

## 13. Archivos de Configuracion que Deben Versionarse

Estos archivos deben mantenerse en el repositorio para asegurar consistencia entre equipos y CI:

- `.npmrc` (en este proyecto: `engine-strict=true`)
- `.nvmrc` (version de Node)
- `.prettierrc.json` (reglas de formato)
- `.prettierignore` (archivos excluidos del formateo)
- `pnpm-lock.yaml` (instalaciones reproducibles)

## 14. Convenciones Operativas

- No versionar `node_modules/`, `dist/`, `.astro/`.
- Usar `pnpm install --frozen-lockfile` en automatizaciones.
- Ejecutar `pnpm run lint` y `pnpm run build` antes de merge.

## 15. Troubleshooting

### 15.1 Error por version de Node o pnpm

Verifica:

```sh
node -v
pnpm -v
```

Luego ajusta a Node 24+ y pnpm 10+.

### 15.2 Warning de scripts bloqueados en pnpm

Si aparece aviso de builds ignorados (por ejemplo `esbuild` o `sharp`):

```sh
pnpm approve-builds
```

### 15.3 Formulario no aparece en Netlify

- Asegura que exista `name="contacto"` y el input oculto `form-name`.
- Vuelve a desplegar y revisa la seccion Forms en Netlify.

## 16. Mantenimiento Recomendado

- Revisar dependencias periodicamente.
- Mantener actualizados Node y pnpm segun politicas del proyecto.
- Revalidar cabeceras de seguridad cuando cambie infraestructura o scripts.

## 17. Licencia

Uso interno de MANEXIS salvo que se indique otra licencia de forma explicita.

---

Si quieres, en el siguiente paso tambien puedo dejarte una plantilla de CONTRIBUTING.md y un PR template para estandarizar colaboraciones. 🚀
