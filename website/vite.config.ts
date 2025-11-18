import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

const basePath = '/artist-portfolio/';

export default defineConfig({
  base: basePath,
  plugins: [react()],
  base: "/web/", 
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
