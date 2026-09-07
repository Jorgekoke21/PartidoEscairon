import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: isGitHubPages ? 'https://jorgekoke21.github.io' : 'https://osavinao.psoe.gal',
  base: isGitHubPages ? '/PartidoEscairon' : undefined,
  integrations: [sitemap()],
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
    css: {
      devSourcemap: true,
    },
  },
});
