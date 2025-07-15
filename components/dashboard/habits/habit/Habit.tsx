import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Clock } from 'lucide-react'
import { capitalizeFirst } from '@/lib/utils'
import IncreaseButton from './IncreaseButton'
import DeleteHabitButton from './DeleteHabitButton'
import { habitEntries, habits } from '@/db/schema'

type HabitProps = {
  defaults: typeof habits.$inferSelect
  selected: typeof habitEntries.$inferSelect
}

export default function Habit({ defaults, selected }: HabitProps) {
  return (
    <section className='bg-card border-border text-card-foreground flex w-full max-w-md flex-col gap-3 rounded-2xl border p-4 shadow-md'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col items-start justify-center'>
          <div className='flex items-center gap-2'>
            <Clock className='text-muted-foreground h-5 w-5' />
            <span className='text-muted-foreground mt-[2px] text-xs font-medium'>
              {defaults.timeOfDay}
            </span>
          </div>
          <h3 className='text-primary text-2xl font-bold capitalize'>
            {defaults.title}
          </h3>
        </div>
        <IncreaseButton
          entryId={selected.id}
          progressCurrent={selected.progressCurrent}
          progressToGo={selected.progressToGo}
        />
      </div>
      <p className='mb-2 text-sm'>{capitalizeFirst(defaults.description)}</p>
      <div className='flex items-center justify-between'>
        {defaults.important && <Badge variant='destructive'>important</Badge>}

        <div>
          <DeleteHabitButton habitId={defaults.id} title={defaults.title} />
          <Button className='text-accent p-1 text-xs underline' variant='link'>
            Edit
          </Button>
        </div>
      </div>
    </section>
  )
}
