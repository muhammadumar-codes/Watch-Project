import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// ✅ Tailwind is handled automatically by PostCSS, not here
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
