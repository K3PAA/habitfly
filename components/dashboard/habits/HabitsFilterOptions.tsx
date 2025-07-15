'use client'
import { useDashboardData } from '@/app/contexts/DashboardDataContext'
import { Button } from '@/components/ui/button'

export type HabitsStatus = 'completed' | 'inprogress' | 'todo' | 'all'

export default function HabitsFilterOptions() {
  const { filterBy, setFilterBy, importantOnly, setImportantOnly } =
    useDashboardData()

  function handleClick(newStatus: HabitsStatus) {
    setFilterBy(newStatus)
  }

  return (
    <section className='my-4 flex items-center justify-between gap-2'>
      <Button
        variant={importantOnly ? 'default' : 'secondary'}
        onClick={() => setImportantOnly(!importantOnly)}
        aria-pressed={importantOnly}
        aria-label='Show important only'
      >
        show important only
      </Button>

      <div className='flex gap-2'>
        <Button
          variant={filterBy === 'all' ? 'default' : 'outline'}
          onClick={() => handleClick('all')}
        >
          All
        </Button>
        <Button
          variant={filterBy === 'completed' ? 'default' : 'outline'}
          onClick={() => handleClick('completed')}
        >
          Completed
        </Button>
        <Button
          variant={filterBy === 'inprogress' ? 'default' : 'outline'}
          onClick={() => handleClick('inprogress')}
        >
          In Progress
        </Button>
        <Button
          variant={filterBy === 'todo' ? 'default' : 'outline'}
          onClick={() => handleClick('todo')}
        >
          Todo
        </Button>
      </div>
    </section>
  )
}
