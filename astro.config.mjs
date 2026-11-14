import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import platformCompress from '@playform/compress';

export default defineConfig({
  site: 'https://xxy421.github.io',
  base: '/love-page',
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  integrations: [sitemap(), platformCompress()],
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn', 'en-us'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
