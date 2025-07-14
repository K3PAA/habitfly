'use client'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn, getDayInfo, sameDayOfYear } from '@/lib/utils'
import { format } from 'date-fns'
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from 'lucide-react'
import { useState } from 'react'
import { CalendarDayButton } from './CalendarDayButton'
import { CalendarNavButton } from './CalendarNavButton'

export default function Callendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [pickerOpen, setPickerOpen] = useState(false)

  // Month and year for header
  const monthYear = format(currentDate, 'yyyy LLL')

  // Date picker popover trigger (now in header)
  const datePickerTrigger = (
    <Popover open={pickerOpen} onOpenChange={setPickerOpen}>
      <PopoverTrigger asChild>
        <button
          className={cn(
            'border-primary hover:bg-primary/10 focus:bg-primary/10 ring-primary/10 text-primary ml-2 flex cursor-pointer items-center justify-center gap-2 rounded-md border bg-transparent p-2 font-semibold shadow-none ring-2 transition-all',
            pickerOpen && 'ring-primary ring-4',
          )}
        >
          <span className='text-base font-semibold'>{monthYear}</span>
          <svg width='20' height='20' fill='none' viewBox='0 0 24 24'>
            <path
              d='M7 10l5 5 5-5'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </PopoverTrigger>
      <PopoverContent
        className='bg-card text-card-foreground border-border w-auto rounded-md border p-0 shadow-md'
        align='center'
      >
        <Calendar
          mode='single'
          selected={currentDate}
          onSelect={(date) => {
            if (date) setCurrentDate(date)
            setPickerOpen(false)
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )

  // Generate day buttons
  const additionalButtons = 3
  const days = []
  for (let i = -additionalButtons; i <= additionalButtons; i++) {
    const date = new Date(currentDate)
    date.setDate(currentDate.getDate() + i)
    const { dayNumber, dayShort } = getDayInfo(date)
    const isToday = sameDayOfYear(date, new Date())
    const isSelected = i === 0
    days.push(
      <CalendarDayButton
        key={i}
        date={date}
        dayShort={dayShort}
        dayNumber={dayNumber}
        isToday={isToday}
        isSelected={isSelected}
        onClick={setCurrentDate}
      />,
    )
  }

  return (
    <div className='flex flex-col items-center gap-2'>
      <div className='mb-1 flex items-center text-lg font-semibold'>
        {datePickerTrigger}
      </div>
      <section className='bg-card border-border grid max-w-[700px] grid-cols-9 gap-2 rounded-xl border p-2 shadow-md'>
        <CalendarNavButton
          direction='prev'
          onClick={() =>
            setCurrentDate((prev) => {
              const d = new Date(prev)
              d.setDate(prev.getDate() - 3)
              return d
            })
          }
        >
          <ArrowLeftCircleIcon />
        </CalendarNavButton>
        {days}
        <CalendarNavButton
          direction='next'
          onClick={() =>
            setCurrentDate((prev) => {
              const d = new Date(prev)
              d.setDate(prev.getDate() + 3)
              return d
            })
          }
        >
          <ArrowRightCircleIcon />
        </CalendarNavButton>
      </section>
    </div>
  )
}
