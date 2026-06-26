import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    vike({ prerender: true }), // Enables Static Site Generation
    tailwindcss(),             // The new Tailwind v4 plugin
  ]
})