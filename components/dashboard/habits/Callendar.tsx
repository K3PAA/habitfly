'use client'
import { cn, getDayInfo, sameDayOfYear } from '@/lib/utils'
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from 'lucide-react'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

function createButtons(
  currentDate: Date,
  setCurrentDate: Dispatch<SetStateAction<Date>>,
) {
  const buttons = []
  const additionalButtons = 3

  for (let i = -additionalButtons; i <= additionalButtons; i++) {
    const date = new Date(currentDate)
    date.setDate(currentDate.getDate() + i)

    const { dayNumber, dayShort, monthShort } = getDayInfo(date)

    buttons.push(
      <button
        key={`${i}-${dayNumber}`}
        onClick={() => setCurrentDate(date)}
        className={cn(
          'grid cursor-pointer place-content-center rounded-sm bg-white p-2 transition-all duration-300 hover:bg-white/50 focus:bg-white/50',
          {
            'bg-white/50 outline-2 outline-blue-400': i === 0,
            'bg-white/20': sameDayOfYear(date, new Date()),
          },
        )}
      >
        <p>{monthShort}</p>
        <p>
          {dayShort} {dayNumber}
        </p>
      </button>,
    )
  }
  return buttons
}

export default function Callendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [buttons, setButtons] = useState(
    createButtons(currentDate, setCurrentDate),
  )

  const handleDateChange = (i: number) => {
    setCurrentDate((prev) => {
      const date = new Date(prev)
      date.setDate(prev.getDate() + i)
      return date
    })
  }

  useEffect(() => {
    setButtons(createButtons(currentDate, setCurrentDate))
  }, [currentDate])

  return (
    <section className='grid max-w-[700px] grid-cols-9'>
      <button
        className='grid cursor-pointer place-content-center rounded-sm bg-white p-4'
        onClick={() => handleDateChange(-3)}
      >
        <ArrowLeftCircleIcon />
      </button>
      {buttons.map((button) => {
        return button
      })}
      <button
        className='grid cursor-pointer place-content-center rounded-sm bg-white p-4'
        onClick={() => handleDateChange(3)}
      >
        <ArrowRightCircleIcon />
      </button>
    </section>
  )
}
