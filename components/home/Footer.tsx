import React from 'react'
import Wrapper from '@/components/shared/Wrapper'

export default function Footer() {
  return (
    <footer className='bg-foreground text-background mt-16 text-center font-bold'>
      <Wrapper className='p-8'>
        <p>
          Created by{' '}
          <a
            href='https://github.com/K3PAA'
            className='underline underline-offset-4 transition-opacity duration-200 hover:opacity-80 focus:opacity-80'
          >
            @K3PAA
          </a>
        </p>
      </Wrapper>
    </footer>
  )
}
