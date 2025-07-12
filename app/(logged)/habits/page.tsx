'use client'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'
import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <div>
      <Button asChild variant='destructive'>
        <LogoutLink>Log out</LogoutLink>
      </Button>
    </div>
  )
}
