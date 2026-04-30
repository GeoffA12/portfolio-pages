// TODO: add ESLint + @typescript-eslint once JS→TS migration is complete (issue #17)
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    passWithNoTests: true,
  },
  plugins: [
    react(),
  ],
  base: '/portfolio-pages/',
})
