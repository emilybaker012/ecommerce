import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

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
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    viteReact(),
  ],
  resolve: {
    alias: aliases,
  },
})

export default config
