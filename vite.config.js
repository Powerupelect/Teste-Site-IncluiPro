import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// DIAGNÓSTICO TEMPORÁRIO — remover depois de confirmar as env vars no build da Netlify.
console.log('[diagnostico] VITE_SUPABASE_URL =', JSON.stringify(process.env.VITE_SUPABASE_URL))
console.log('[diagnostico] VITE_SUPABASE_ANON_KEY presente =', Boolean(process.env.VITE_SUPABASE_ANON_KEY))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
