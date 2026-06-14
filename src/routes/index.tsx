import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import Button from '@mui/material/Button'
import { getCurrentTheme, applyTheme } from '@common/theme'
export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [theme, setTheme] = React.useState(getCurrentTheme())
  const handleButtonClick = () => {
    console.log('Current theme:', theme)
    if (theme === 'dark') {
      setTheme('light')
      applyTheme('light')
    } else {
      setTheme('dark')
      applyTheme('dark')
    }
  }

  return (
    <div>
      <Button onClick={handleButtonClick}>
        Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </Button>
    </div>
  )
}
