import Sidebar from '@/components/dashboard/shared/Sidebar'
import React from 'react'

type LayoutProps = {
  children: React.ReactNode
}

export default function layout({ children }: LayoutProps) {
  return (
    <section className='grid h-screen grid-cols-[300px_1fr]'>
      <Sidebar />
      <div className='overflow-auto'>{children}</div>
    </section>
  )
}
