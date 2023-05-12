import { fileURLToPath, URL } from "url"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vuetify from "vite-plugin-vuetify"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify({
      autoImport: true,
    }),
  ],
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: '/',
  css: {
    preprocessorOptions: {
      scss: { charset: false },
      css: { charset: false },
    },
  },
  optimizeDeps: {
    exclude: ['vuetify'],
    entries: [
      './src/**/*.vue',
    ],
  },
})
