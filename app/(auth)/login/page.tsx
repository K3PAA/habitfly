import { LoginLink } from '@kinde-oss/kinde-auth-nextjs/components'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Login Page',
}

export default function Login() {
  return (
    <main className=''>
      <h1>Habitfly</h1>
      <Button asChild>
        <LoginLink>Login</LoginLink>
      </Button>
    </main>
  )
}
