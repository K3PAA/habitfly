import { cn } from '@/lib/utils'
import React from 'react'

const badgeVariants = {
  default: 'bg-primary text-primary-foreground',
  secondary: 'bg-secondary text-secondary-foreground',
  destructive: 'bg-destructive text-white',
}

type BadgeProps = {
  children: React.ReactNode
  variant?: keyof typeof badgeVariants
  className?: string
}

export function Badge({
  children,
  variant = 'default',
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'focus:ring-ring inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none',
        badgeVariants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
