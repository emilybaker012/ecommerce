import React from 'react'
import Button from '@mui/material/Button'

export type SaveButtonProps = {
  loading?: boolean
  disabled?: boolean
  onClick?: () => void
  children?: React.ReactNode
}

const SaveButton: React.FC<SaveButtonProps> = ({
  loading,
  disabled,
  onClick,
  children = loading ? 'Saving...' : 'Save',
}) => {
  return (
    <Button
      variant="contained"
      loadingPosition="start"
      color="primary"
      onClick={onClick}
      disabled={disabled}
      loading={loading}
    >
      {children}
    </Button>
  )
}

export default SaveButton
