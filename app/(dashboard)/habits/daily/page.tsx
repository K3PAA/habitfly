import Callendar from '@/components/dashboard/habits/callendar/Callendar'
import Fallback from '@/components/dashboard/habits/Fallback'
import HabitsFilterOptions from '@/components/dashboard/habits/HabitsFilterOptions'
import HabitsLoader from '@/components/dashboard/habits/HabitsLoader'

import { Suspense } from 'react'

export default async function Page() {
  return (
    <section className='p-4'>
      <Callendar />
      <HabitsFilterOptions />

      <Suspense fallback={<Fallback />}>
        <HabitsLoader mode='daily' />
      </Suspense>
    </section>
  )
}
