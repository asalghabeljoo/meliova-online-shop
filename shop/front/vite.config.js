// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Allow overriding the backend via env, else default to localhost:8081
const BACKEND = (process.env.VITE_BACKEND || 'http://127.0.0.1:8081').replace(/\/$/, '')

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,            // expose to Windows browser (wsl.localhost)
    port: 5173,
    open: false,           // set true if you want the browser to auto-open
    // HMR tweaks that help on WSL
    hmr: {
      host: 'localhost',
      clientPort: 5173,
    },
    proxy: {
      '/api': {
        target: BACKEND,   // e.g. http://127.0.0.1:8081 (or http://wsl.localhost:8081)
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
