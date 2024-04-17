import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createVuePlugin } from 'vite-plugin-vue';

export default defineConfig({
  plugins: [
    react(),
    createVuePlugin() // Include this if you're using Vue.js as well
  ],
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
});