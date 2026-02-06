import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://caisuqing666.github.io',
  base: '/jinri-todo',
  trailingSlash: 'always',
  build: {
    assets: 'assets'
  }
});
