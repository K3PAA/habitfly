import Callendar from '@/components/dashboard/habits/Callendar'
import Habits from '@/components/dashboard/habits/Habits'

export default function Page() {
  return (
    <section className='p-4'>
      <Callendar />

      <Habits mode='daily' />
    </section>
  )
}
