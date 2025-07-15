import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { HabitT } from '@/lib/types'
import { Clock } from 'lucide-react'
import { capitalizeFirst } from '@/lib/utils'
import { db } from '@/db'
import { habitEntries } from '@/db/schema'
import { and, eq, sql } from 'drizzle-orm'
import IncreaseButton from './IncreaseButton'
import DeleteHabitButton from './DeleteHabitButton'

export default async function Habit({
  id,
  description,
  important,
  title,
  timeOfDay,
}: HabitT) {
  const today = new Date().toISOString().split('T')[0]
  const [entry] = await db
    .select()
    .from(habitEntries)
    .where(
      and(
        eq(habitEntries.habitId, id),
        sql`DATE(${habitEntries.date}) = ${today}`,
      ),
    )

  if (!entry) return

  return (
    <section className='bg-card border-border text-card-foreground flex w-full max-w-md flex-col gap-3 rounded-2xl border p-4 shadow-md'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col items-start justify-center'>
          <div className='flex items-center gap-2'>
            <Clock className='text-muted-foreground h-5 w-5' />
            <span className='text-muted-foreground mt-[2px] text-xs font-medium'>
              {timeOfDay}
            </span>
          </div>
          <h3 className='text-primary text-2xl font-bold capitalize'>
            {title}
          </h3>
        </div>
        <IncreaseButton
          entryId={entry.id}
          progressCurrent={entry.progressCurrent}
          progressToGo={entry.progressToGo}
        />
      </div>
      <p className='mb-2 text-sm'>{capitalizeFirst(description)}</p>
      <div className='flex items-center justify-between'>
        {important && <Badge variant='destructive'>important</Badge>}

        <div>
          <DeleteHabitButton habitId={id} title={title} />
          <Button className='text-accent p-1 text-xs underline' variant='link'>
            Edit
          </Button>
        </div>
      </div>
    </section>
  )
}
