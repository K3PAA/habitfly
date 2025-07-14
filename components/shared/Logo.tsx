import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
}
export default function Logo({ className }: LogoProps) {
  return (
    <p
      className={cn('text-foreground text-3xl font-bold', className)}
      aria-label='logo'
    >
      Habit<span className='text-primary'>fly</span>
    </p>
  )
}
