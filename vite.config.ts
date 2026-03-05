import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 4200,
  },
  build: {
    target: 'ES2022',
    outDir: 'dist/portfolio',
  },
});
