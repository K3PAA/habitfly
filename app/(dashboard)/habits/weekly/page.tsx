import Fallback from '@/components/dashboard/habits/Fallback'
import HabitsLoader from '@/components/dashboard/habits/HabitsLoader'
import { Suspense } from 'react'

export default function WeeklyHabitsPage() {
  return (
    <section className='p-4'>
      <Suspense fallback={<Fallback />}>
        <HabitsLoader mode='weekly' />
      </Suspense>
    </section>
  )
}
