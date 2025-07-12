import { Button } from '@/components/ui/button'
import { RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components'

export const metadata = {
  title: 'Register Page',
}

export default function Register() {
  return (
    <main className=''>
      <h1>Habitfly</h1>
      <Button asChild variant='secondary'>
        <RegisterLink>Register</RegisterLink>
      </Button>
    </main>
  )
}
