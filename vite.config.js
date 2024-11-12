import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `
          @import "~bootstrap/dist/css/bootstrap.min.css";
        `
      }
    }
  }
})
