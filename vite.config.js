import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    watch: {
      // Exclude locked/binary files that Vite should never watch
      ignored: [
        '**/*.rar',
        '**/*.zip',
        '**/*.7z',
        '**/node_modules/**',
        '**/dist/**',
        '**/public/images/**',
        '**/images/**',
      ],
    },
  },
})

