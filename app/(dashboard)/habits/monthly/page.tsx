import Fallback from '@/components/dashboard/habits/Fallback'
import Habits from '@/components/dashboard/habits/Habits'
import HabitsLoader from '@/components/dashboard/habits/HabitsLoader'
import { Suspense } from 'react'

export default function MonthlyHabitsPage() {
  return (
    <section className='p-4'>
      <Suspense fallback={<Fallback />}>
        <HabitsLoader mode='monthly' />
      </Suspense>
    </section>
  )
}
