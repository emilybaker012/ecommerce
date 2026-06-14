import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, defineProject, mergeConfig } from 'vitest/config'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'

import viteConfig from './vite.config'

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url))

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      // Use `workspace` field in Vitest < 3.2
      projects: [
        defineProject({
          plugins: [
            storybookTest({
              // The location of your Storybook config, main.js|ts
              configDir: path.join(dirname, '.storybook'),
              // This should match your package.json script to run Storybook
              // The --ci flag will skip prompts and not open a browser
              storybookScript: 'bun run storybook --ci',
            }),
          ],
          test: {
            name: 'storybook',
            // Enable browser mode
            browser: {
              enabled: true,
              // Make sure to install Playwright
              provider: 'playwright',
              headless: true,
              instances: [{ browser: 'chromium' }],
            },
            setupFiles: ['./.storybook/vitest.setup.ts'],
          },
          resolve: {
            alias: viteConfig.resolve?.alias,
          },
        }),
        defineProject({
          test: {
            name: 'Unit Tests',
            environment: 'jsdom',
            include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
            exclude: ['node_modules', 'dist', '.idea', '.vscode', 'public'],
            setupFiles: ['./vitest.setup.js'],
            globals: true,
          },
          resolve: {
            alias: viteConfig.resolve?.alias,
          },
        }),
      ],
    },
  }),
)
