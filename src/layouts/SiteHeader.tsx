import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SiteNavigation from './SiteNavigation'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import { MdMenu } from 'react-icons/md'
import Typography from '@mui/material/Typography'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import { MdOutlineWbSunny } from 'react-icons/md'
import { applyTheme, getCurrentTheme } from '@/common/theme'
import { MdOutlineNightlight } from 'react-icons/md'
import { Link } from '@tanstack/react-router'

const drawerWidth = 240
const container = window !== undefined ? () => window.document.body : undefined

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const drawer = (handleDrawerToggle: () => void) => (
  <Box
    onClick={handleDrawerToggle}
    sx={{ textAlign: 'center' }}
    className="dark:bg-gray-900 dark:text-white h-screen"
  >
    <Typography variant="h6" sx={{ my: 2, fontWeight: 'bold' }}>
      Herp Derp
    </Typography>
    <Divider className="dark:bg-gray-500" />
    <List>
      {navItems.map((item) => (
        <ListItem key={item.name} disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} href={item.href}>
            <ListItemText primary={item.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
)
const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [theme, setTheme] = React.useState(getCurrentTheme())
  const toggleTheme = () => {
    console.log('Current theme:', theme)
    if (theme === 'dark') {
      setTheme('light')
      applyTheme('light')
    } else {
      setTheme('dark')
      applyTheme('dark')
    }
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }
  return (
    <Box>
      <AppBar component="nav" className=" bg-blue-700 text-white">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MdMenu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Herp Derp
          </Typography>
          <Box
            sx={{ display: { xs: 'none', sm: 'block' }, marginLeft: 'auto' }}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="mx-2 text-white hover:text-blue-200"
              >
                {item.name}
              </Link>
            ))}
          </Box>
          <IconButton
            color="inherit"
            sx={{ marginLeft: { xs: 'auto', sm: 2 }, scale: 0.75 }}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <MdOutlineWbSunny /> : <MdOutlineNightlight />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer(handleDrawerToggle)}
        </Drawer>
      </nav>
    </Box>
  )
}

SiteHeader.propTypes = {}

export default SiteHeader
