import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@public': resolve(__dirname, './public'),
      '@': resolve(__dirname, './src')
    }
  }
});
