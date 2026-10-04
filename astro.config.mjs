import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://a3ther.dev',
  base: '/',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
