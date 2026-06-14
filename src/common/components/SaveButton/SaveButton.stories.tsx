import { Meta, StoryObj } from '@storybook/react'
import SaveButton, { SaveButtonProps } from './SaveButton'

export default {
  title: 'Common/SaveButton',
  component: SaveButton,
} as Meta<SaveButtonProps>

type Story = StoryObj<SaveButtonProps>

export const Default: Story = {
  args: {
    children: 'Save',
    disabled: false,
    loading: false,
  },
}

export const Loading: Story = {
  args: {
    children: 'Save',
    disabled: false,
    loading: true,
  },
}

export const Disabled: Story = {
  args: {
    children: 'Save',
    disabled: true,
    loading: false,
  },
}
