import React from 'react'
import SiteHeader from './SiteHeader'

type SiteLayoutProps = {
  children: React.ReactNode
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col text-black dark:text-white dark:bg-gray-950">
      <SiteHeader />
      <div className="flex grow items-center justify-center text-[calc(10px+2vmin)]">
        {children}
      </div>
    </div>
  )
}

export default SiteLayout
