import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),

    tailwindcss(),
  ],
  build: {
    // three.js lives in its own lazy-loaded chunk (hero-scene), so a large chunk is expected
    chunkSizeWarningLimit: 1000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
