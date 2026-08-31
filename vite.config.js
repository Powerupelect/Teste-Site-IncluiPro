import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// DIAGNÓSTICO TEMPORÁRIO — remover depois de confirmar as env vars no build da Netlify.
{
  const url = process.env.VITE_SUPABASE_URL || ''
  console.log('[diagnostico] tamanho de VITE_SUPABASE_URL =', url.length)
  console.log('[diagnostico] igual após trim() =', url.trim() === url)
  console.log('[diagnostico] primeiros 5 char codes =', [...url.slice(0, 5)].map((c) => c.charCodeAt(0)))
  console.log('[diagnostico] últimos 5 char codes =', [...url.slice(-5)].map((c) => c.charCodeAt(0)))
  try {
    new URL(url)
    console.log('[diagnostico] new URL() funcionou = true')
  } catch (e) {
    console.log('[diagnostico] new URL() funcionou = false —', e.message)
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
