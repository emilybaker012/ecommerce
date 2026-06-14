import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import tailwindcss from '@tailwindcss/vite'

export const aliases = {
  '@assets': '/src/assets',
  '@common': '/src/common',
  '@features': '/src/features',
  '@layout': '/src/layout',
  '@routes': '/src/routes',
  '@': '/src',
}

const config = defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    viteReact(),
    tailwindcss(),
  ],
  resolve: {
    alias: aliases,
    tsconfigPaths: true,
  },
})

export default config
