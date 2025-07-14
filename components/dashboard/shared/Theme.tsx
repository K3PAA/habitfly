'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Theme() {
  const { theme, setTheme } = useTheme()
  const handleTheme = () => {
    if (theme === 'system') {
      const prefersLightTheme = window.matchMedia(
        '(prefers-color-scheme: light)',
      )
      setTheme(prefersLightTheme.matches ? 'dark' : 'light')
      return
    }

    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button
      className='bg-card/90 mt-auto flex w-full cursor-pointer items-center justify-center gap-3 rounded-sm py-4'
      onClick={handleTheme}
    >
      <span className='sr-only'>toggle theme button</span>
      <Sun className='block h-[1.2rem] w-[1.2rem] scale-100 transition-all' />

      <div className='h-8 w-14 rounded-full bg-blue-300'>
        <div className='mt-1 ml-1 h-6 w-6 translate-x-0 rounded-full bg-white transition-all duration-300 dark:translate-x-6'></div>
      </div>

      <Moon className='block h-[1.2rem] w-[1.2rem] scale-100 transition-all' />
    </button>
  )
}
