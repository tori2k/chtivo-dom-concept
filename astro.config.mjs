import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://tori2k.github.io',
  base: '/chtivo-dom-concept',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
