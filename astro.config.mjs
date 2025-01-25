import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  style: {
    global: ['./src/styles/custom.scss'], // Estilos globales
  },
  integrations: [react()],
});
