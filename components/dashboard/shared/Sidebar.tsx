'use client'

import Logo from '@/components/shared/Logo'
import { navLinks } from '@/lib/data'
import Link from 'next/link'
import Theme from './Theme'
import { useState, useRef } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Sidebar() {
  const [habitsOpen, setHabitsOpen] = useState(false)
  const habitsButtonRef = useRef<HTMLButtonElement>(null)
  const habitsDropdownRef = useRef<HTMLDivElement>(null)

  return (
    <aside className='bg-card border-border text-card-foreground grid min-h-screen grid-rows-[5rem_1fr] border-r'>
      <Logo className='border-border flex items-center border-b px-4' />

      <section className='flex flex-col px-4 pb-20'>
        <h2 className='mt-4 text-xl font-bold'>Navigate</h2>
        <ul className='mt-2 grid gap-1'>
          {navLinks.map((item) => {
            if (item.children) {
              return (
                <li key={item.text} className='relative'>
                  <button
                    ref={habitsButtonRef}
                    className='group focus:bg-primary/10 flex w-full cursor-pointer items-center justify-between rounded-md py-2 pl-4 text-left capitalize transition-colors'
                    onClick={() => setHabitsOpen((open) => !open)}
                    aria-expanded={habitsOpen}
                  >
                    <span className='text-card-foreground group-focus:text-primary block transition-all duration-300'>
                      {item.text}
                    </span>
                    <ChevronDown
                      className={`ml-3 h-6 w-6 rounded p-1 transition-transform duration-300 ${habitsOpen ? 'rotate-180' : 'rotate-0'}`}
                    />
                  </button>
                  <div
                    ref={habitsDropdownRef}
                    className={
                      'overflow-hidden transition-all duration-500 ' +
                      (habitsOpen
                        ? 'max-h-40 opacity-100'
                        : 'max-h-0 opacity-0')
                    }
                  >
                    <ul className='flex flex-col gap-1 py-2'>
                      {item.children.map((child) => (
                        <li key={child.to}>
                          <Link
                            href={child.to}
                            className='text-card-foreground hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary block rounded-md px-8 py-2 text-left transition-colors'
                            tabIndex={habitsOpen ? 0 : -1}
                          >
                            {child.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              )
            }
            return (
              <li key={item.to}>
                <Link
                  href={item.to}
                  className='group hover:bg-primary/10 focus:bg-primary/10 block rounded-md py-2 pl-4 capitalize transition-colors'
                >
                  <span className='text-card-foreground group-hover:text-primary group-focus:text-primary block transition-all duration-300 group-hover:translate-x-3 group-focus:translate-x-3'>
                    {item.text}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>

        <Theme />
      </section>
    </aside>
  )
}
