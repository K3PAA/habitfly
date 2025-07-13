import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'
import { Button } from '@/components/ui/button'

export default function LogoutButton() {
  return (
    <Button asChild variant='destructive'>
      <LogoutLink>Log out</LogoutLink>
    </Button>
  )
}
