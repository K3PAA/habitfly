import { cn } from '@/lib/utils'

type WrapperProps = {
  children: React.ReactNode
  className?: string
}

export default function Wrapper({ children, className }: WrapperProps) {
  return (
    <div className={cn('mx-auto max-w-[1110px] px-4 sm:px-8', className)}>
      {children}
    </div>
  )
}
