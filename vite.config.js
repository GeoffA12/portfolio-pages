import { defineConfig, transformWithEsbuild } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  plugins: [
    {
      name: 'load-js-files-as-jsx',
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/)) return null
        return transformWithEsbuild(code, id, { loader: 'jsx' })
      },
    },
    react(),
  ],
  base: '/portfolio-pages/',
})
