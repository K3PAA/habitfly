'use client'

import { useDashboardData } from '@/app/contexts/DashboardDataContext'
import { habitEntries, habits } from '@/db/schema'
import { sameDayOfYear } from '@/lib/utils'
import Habit from './habit/Habit'
import HabitsNotFound from './HabitsNotFound'

type HabitsProps = {
  data: {
    habits: (typeof habits.$inferSelect)[]
    entries: (typeof habitEntries.$inferSelect)[]
  }
}

export default function Habits({ data }: HabitsProps) {
  const { selectedDate, filterBy, importantOnly } = useDashboardData()
  const withImportance = data.habits.filter((habit) => {
    return importantOnly ? habit.important === importantOnly : true
  })
  let elements = 0

  return (
    <main className='even-grid mt-4'>
      {withImportance.map((habit) => {
        const selectedEntry = data.entries
          .filter((entry) => entry.habitId === habit.id)
          .find((entry) => sameDayOfYear(entry.date, selectedDate))

        if (!selectedEntry) return null
        elements++

        if (filterBy === 'all') {
          return (
            <Habit key={habit.id} defaults={habit} selected={selectedEntry} />
          )
        }
        if (
          filterBy === 'completed' &&
          selectedEntry.progressCurrent === selectedEntry.progressToGo
        ) {
          return (
            <Habit key={habit.id} defaults={habit} selected={selectedEntry} />
          )
        }
        if (
          filterBy === 'inprogress' &&
          selectedEntry.progressCurrent > 0 &&
          selectedEntry.progressCurrent < selectedEntry.progressToGo
        ) {
          return (
            <Habit key={habit.id} defaults={habit} selected={selectedEntry} />
          )
        }
        if (filterBy === 'todo' && selectedEntry.progressCurrent === 0) {
          return (
            <Habit key={habit.id} defaults={habit} selected={selectedEntry} />
          )
        }
      })}
      {elements === 0 && <HabitsNotFound className='col-span-full' />}
    </main>
  )
}
