import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),],
   server: {
    host: true, // or use '0.0.0.0' to expose on all IPs
  },
})
