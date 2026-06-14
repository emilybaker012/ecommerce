import type { Preview } from '@storybook/react-vite'
import {
  withThemeByDataAttribute,
} from '@storybook/addon-themes'

import { themes } from 'storybook/theming'

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.light,
    },
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-theme',
    }),
  ],
}

export default preview
