import { DashboardDataProvider } from '@/app/contexts/DashboardDataContext'
import CreateHabitDialog from '@/components/dashboard/habits/CreateHabitDialog'
import HabitsNavLinks from '@/components/dashboard/habits/HabitsNavLinks'

export default function HabitsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header className='bg-card border-border text-card-foreground flex h-20 items-center border-b p-4'>
        <nav className='flex flex-1 items-center justify-between'>
          <HabitsNavLinks />
        </nav>
        <CreateHabitDialog />
      </header>
      {children}
    </>
  )
}
