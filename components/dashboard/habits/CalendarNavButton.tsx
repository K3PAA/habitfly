import { cn } from '@/lib/utils'
import React from 'react'

interface CalendarNavButtonProps {
  direction: 'prev' | 'next'
  onClick: () => void
  children: React.ReactNode
}

export function CalendarNavButton({
  direction,
  onClick,
  children,
}: CalendarNavButtonProps) {
  return (
    <button
      className={cn(
        'bg-primary/80 text-primary-foreground hover:bg-primary focus:bg-primary border-primary flex cursor-pointer items-center justify-center rounded-md border p-3 shadow transition-colors',
      )}
      onClick={onClick}
      aria-label={direction === 'prev' ? 'Previous days' : 'Next days'}
    >
      {children}
    </button>
  )
}
