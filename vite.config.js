// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/florian-landing-page/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contactame: resolve(__dirname, 'contactame.html'),
        sobreMi: resolve(__dirname, 'sobreMi.html'),
        negocis: resolve(__dirname, 'negocis.html'),
      },
    },
  },
})