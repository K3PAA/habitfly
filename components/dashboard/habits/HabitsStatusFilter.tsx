'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export type HabitsStatus = 'completed' | 'inprogress' | 'todo' | 'all'

export default function HabitsStatusFilter({
  onChange,
  initial = 'all',
}: {
  onChange?: (status: HabitsStatus) => void
  initial?: HabitsStatus
}) {
  const [status, setStatus] = useState<HabitsStatus>(initial)

  function handleClick(newStatus: HabitsStatus) {
    setStatus(newStatus)
    onChange?.(newStatus)
  }

  return (
    <div className='flex gap-2'>
      <Button
        variant={status === 'all' ? 'default' : 'outline'}
        onClick={() => handleClick('all')}
      >
        All
      </Button>
      <Button
        variant={status === 'completed' ? 'default' : 'outline'}
        onClick={() => handleClick('completed')}
      >
        Completed
      </Button>
      <Button
        variant={status === 'inprogress' ? 'default' : 'outline'}
        onClick={() => handleClick('inprogress')}
      >
        In Progress
      </Button>
      <Button
        variant={status === 'todo' ? 'default' : 'outline'}
        onClick={() => handleClick('todo')}
      >
        Todo
      </Button>
    </div>
  )
}
