'use client'

import { HabitsStatus } from '@/components/dashboard/habits/HabitsFilterOptions'
import { createContext, useContext, useState, ReactNode } from 'react'

export type DashboardDataContextType = {
  selectedDate: Date
  setSelectedDate: (date: Date) => void

  filterBy: HabitsStatus
  setFilterBy: (filterBy: HabitsStatus) => void

  importantOnly: boolean
  setImportantOnly: (importantOnly: boolean) => void
}

const DashboardDataContext = createContext<
  DashboardDataContextType | undefined
>(undefined)

export const DashboardDataProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [filterBy, setFilterBy] = useState<HabitsStatus>('all')
  const [importantOnly, setImportantOnly] = useState(false)

  return (
    <DashboardDataContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        filterBy,
        setFilterBy,
        importantOnly,
        setImportantOnly,
      }}
    >
      {children}
    </DashboardDataContext.Provider>
  )
}

export const useDashboardData = () => {
  const context = useContext(DashboardDataContext)
  if (!context) {
    throw new Error(
      'useDashboardData must be used within a DashboardDataProvider',
    )
  }
  return context
}
