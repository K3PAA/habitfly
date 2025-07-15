import { useDashboardData } from '@/app/contexts/DashboardDataContext'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'

export default function HabitsNotFound({ className }: { className?: string }) {
  const { setSelectedDate } = useDashboardData()

  const handleGoToToday = () => {
    setSelectedDate(new Date())
  }

  return (
    <div
      className={cn(
        'mt-10 flex flex-col items-center justify-center text-center',
        className,
      )}
    >
      <h3 className='text-2xl font-bold'>
        There is no history of habits for this day.
      </h3>
      <p className='text-muted-foreground mx-auto mt-4 max-w-[40ch]'>
        Make sure that you have created new habit before this day started. There
        is also possiblity that this day is still ahead of you. Wait for it
        patiently then.
      </p>

      <Button onClick={handleGoToToday} className='mt-6'>
        check today's habits
      </Button>
    </div>
  )
}
