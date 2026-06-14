// theme-switcher.js (example)
export function applyTheme(theme: string) {
  if (theme === 'dark') {
    document.body.setAttribute('data-theme', 'dark')
  } else {
    document.body.setAttribute('data-theme', 'light')
  }
  localStorage.setItem('theme', theme)
}

export function getCurrentTheme() {
  return localStorage.getItem('theme') || 'light'
}

export function initializeTheme() {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (savedTheme) {
    applyTheme(savedTheme)
  } else if (prefersDark) {
    applyTheme('dark')
  } else {
    applyTheme('light')
  }
}
