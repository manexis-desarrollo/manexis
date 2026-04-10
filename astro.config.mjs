// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
const siteUrl = 'https://manexis.com';

export default defineConfig({
  site: siteUrl,
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()]
  }
});