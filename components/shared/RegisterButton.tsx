import React from 'react'
import { Button } from '@/components/ui/button'
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs/components'

export default function LoginButton() {
  return (
    <Button
      variant='secondary'
      asChild
      className='font-bold uppercase'
      size='lg'
    >
      <LoginLink>Register</LoginLink>
    </Button>
  )
}
