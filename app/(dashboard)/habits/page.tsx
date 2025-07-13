import Callendar from '@/components/dashboard/habits/Callendar'
import Habits from '@/components/dashboard/habits/Habits'
import { Button } from '@/components/ui/button'
import { ArrowLeftCircleIcon, ArrowRightCircleIcon, Plus } from 'lucide-react'

export default function Page() {
  return (
    <section>
      <header className='flex h-20 items-center justify-between border-b border-red-300 p-4'>
        <h1 className='text-3xl font-bold'>Habits</h1>

        <Button className='cursor-pointer'>
          Create Habit <Plus />
        </Button>
      </header>

      <div className='flex gap-3 text-xl'>
        <p>daily</p>
        <p>weekly</p>
        <p>monthly</p>
      </div>

      <Callendar />

      <section>
        <p>Show with status</p>
        <div>
          <Button variant='default'>Completed</Button>
          <Button variant='default'>In Progress</Button>
          <Button variant='default'>Todo</Button>
        </div>
      </section>

      <Habits />
    </section>
  )
}
