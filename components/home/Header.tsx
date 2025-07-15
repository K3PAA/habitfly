import React from 'react'
import Logo from '@/components/shared/Logo'

import LoginButton from '@/components/shared/LoginButton'
import RegisterButton from '@/components/shared/RegisterButton'
import Wrapper from '@/components/shared/Wrapper'
import { ModeToggle } from '@/components/ThemeButton'

export default function Header() {
  return (
    <header className='bg-background border-border sticky top-0 z-10 border-b shadow-lg'>
      <Wrapper className='flex flex-col items-center justify-center gap-4 py-4 sm:flex-row sm:items-center sm:justify-between'>
        <Logo />

        <nav className='flex items-center gap-2 sm:gap-4'>
          <LoginButton />
          <RegisterButton />
          <ModeToggle />
        </nav>
      </Wrapper>
    </header>
  )
}
