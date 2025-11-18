import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

const basePath = "/web/"; 

export default defineConfig({
  base: basePath,
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
