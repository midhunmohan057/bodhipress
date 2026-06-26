import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    vike(), // Cleaned up! No settings inside here anymore.
    tailwindcss(),             
  ]
})