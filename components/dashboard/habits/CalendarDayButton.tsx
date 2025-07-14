import { cn } from '@/lib/utils'
import React from 'react'

interface CalendarDayButtonProps {
  date: Date
  dayShort: string
  dayNumber: number
  isToday: boolean
  isSelected: boolean
  onClick: (date: Date) => void
}

export function CalendarDayButton({
  date,
  dayShort,
  dayNumber,
  isToday,
  isSelected,
  onClick,
}: CalendarDayButtonProps) {
  return (
    <button
      onClick={() => onClick(date)}
      aria-current={isSelected ? 'date' : undefined}
      className={cn(
        'flex min-h-[48px] min-w-[44px] cursor-pointer flex-col items-center justify-center gap-0.5 rounded-md border border-transparent px-2 py-2 font-medium transition-all duration-200 outline-none',
        {
          'bg-primary/10 text-primary ring-primary/30 ring-2':
            isToday && !isSelected,
          'bg-primary text-primary-foreground ring-primary border-primary z-10 scale-110 opacity-70 shadow-lg ring-4':
            isSelected,
          'bg-card text-card-foreground hover:bg-primary/10 focus:bg-primary/10':
            !isToday && !isSelected,
        },
      )}
      style={isSelected ? { fontWeight: 700 } : {}}
    >
      <span className='text-sm leading-none font-semibold'>{dayShort}</span>
      <span className='text-lg leading-none font-bold'>{dayNumber}</span>
    </button>
  )
}
