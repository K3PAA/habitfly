'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/lib/data'

export default function HabitsNavLinks() {
  const pathname = usePathname()
  const habitLinks = navLinks.find((l) => l.text === 'habits')?.children || []
  return (
    <div className='flex gap-2'>
      {habitLinks.map((child) => {
        const isActive = pathname === child.to
        return (
          <Link
            key={child.to}
            href={child.to}
            className={[
              'rounded-md px-4 py-2 text-lg font-medium capitalize transition-colors',
              isActive
                ? 'text-primary font-black'
                : 'text-card-foreground hover:text-primary focus:text-primary',
            ].join(' ')}
          >
            {child.text}
          </Link>
        )
      })}
    </div>
  )
}
