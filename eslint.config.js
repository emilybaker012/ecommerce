import { defineConfig, globalIgnores } from 'eslint/config'
import storybook from 'eslint-plugin-storybook'
//  @ts-check
import { tanstackConfig } from '@tanstack/eslint-config'

export default defineConfig({
  plugins: {
    ...tanstackConfig.plugins,
    storybook,
  },
})

// Ignore files that are not relevant for linting
globalIgnores(['./.storybook/'])
