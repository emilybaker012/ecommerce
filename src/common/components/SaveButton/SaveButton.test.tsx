import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import SaveButton from './SaveButton'

describe('SaveButton', () => {
  it('renders with default text', () => {
    render(<SaveButton />)
    expect(screen.getByRole('button')).toHaveTextContent('Save')
  })

  it('renders with custom children', () => {
    render(<SaveButton>Submit</SaveButton>)
    expect(screen.getByRole('button')).toHaveTextContent('Submit')
  })

  it('shows "Saving..." when loading is true and no children are provided', () => {
    render(<SaveButton loading />)
    expect(screen.getByRole('button')).toHaveTextContent('Saving...')
  })

  it('is disabled when disabled prop is true', () => {
    render(<SaveButton disabled />)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<SaveButton onClick={handleClick} />)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalled()
  })

  it('does not call onClick when disabled', () => {
    const handleClick = vi.fn()
    render(<SaveButton onClick={handleClick} disabled />)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('passes loading prop to Button', () => {
    render(<SaveButton loading />)
    expect(screen.getByRole('button')).toHaveClass('MuiButton-loading')
  })
})
