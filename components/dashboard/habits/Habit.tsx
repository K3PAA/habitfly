import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { HabitT } from '@/lib/types'
import { Clock } from 'lucide-react'
import { capitalizeFirst } from '@/lib/utils'

export default function Habit({
  id,
  description,
  title,
  progressToGo,
  progressCurrent,
  // timeOfDay, // not used for now
}: HabitT) {
  return (
    <section className='bg-card border-border text-card-foreground flex w-full max-w-md flex-col gap-3 rounded-2xl border p-4 shadow-md'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col items-start justify-center'>
          <div className='flex items-center gap-2'>
            <Clock className='text-muted-foreground h-5 w-5' />
            <span className='text-muted-foreground mt-[2px] text-xs font-medium'>
              6:30pm
            </span>
          </div>
          <h3 className='text-primary text-2xl font-bold capitalize'>
            {title}
          </h3>
        </div>
        <button className='border-primary text-primary bg-card flex h-12 w-12 items-center justify-center rounded-full border-2 text-lg font-bold shadow-sm'>
          {progressCurrent}/{progressToGo}
        </button>
      </div>
      <p className='mb-2 text-sm'>{capitalizeFirst(description)}</p>
      <div className='flex items-center justify-between'>
        <div className='flex gap-2'>
          <Badge variant='destructive'>important</Badge>
          <Badge variant='secondary'>focus</Badge>
        </div>
        <Button className='text-accent text-xs underline' variant='link'>
          Edit
        </Button>
      </div>
    </section>
  )
}
