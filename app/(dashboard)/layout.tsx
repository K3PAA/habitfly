import Sidebar from '@/components/dashboard/shared/Sidebar'
import React from 'react'
import { DashboardDataProvider } from '../contexts/DashboardDataContext'
import HabitsFilterOptions from '@/components/dashboard/habits/HabitsFilterOptions'

type LayoutProps = {
  children: React.ReactNode
}

export default function layout({ children }: LayoutProps) {
  return (
    <DashboardDataProvider>
      <section className='border-border mx-auto grid h-screen max-w-[1200px] grid-cols-[300px_1fr] border-x'>
        <Sidebar />
        <div className='overflow-auto'>{children}</div>
      </section>
    </DashboardDataProvider>
  )
}
