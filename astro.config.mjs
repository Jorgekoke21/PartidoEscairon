import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jorgekoke21.github.io',
  base: '/PartidoEscairon',
  integrations: [sitemap()],
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
    css: {
      devSourcemap: true,
    },
  },
});
