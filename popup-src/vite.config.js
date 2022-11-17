import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        postcss: true
      }),
    })
  ],
  build: {
    outDir: '../AntiRickRoll/popup',
    emptyOutDir: true,
  }
});