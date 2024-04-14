import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import animations from '@midudev/tailwind-animations'

// https://astro.build/config
export default defineConfig({
  plugins: [animations],
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});