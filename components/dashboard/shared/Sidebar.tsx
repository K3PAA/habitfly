import Logo from '@/components/shared/Logo'
import { navLinks } from '@/lib/data'
import Link from 'next/link'
import Theme from './Theme'

export default function Sidebar() {
  return (
    <aside className='grid grid-rows-[5rem_1fr] bg-blue-300'>
      <Logo className='flex items-center border-b border-amber-200 px-4' />

      <section className='flex flex-col px-4 pb-20'>
        <h2 className='mt-4 text-xl font-bold'>Navigate</h2>
        <ul className='grid gap-1'>
          {navLinks.map((item) => {
            return (
              <li key={item.to}>
                <Link
                  href={item.to}
                  className='group block rounded-sm bg-red-300 py-2 pl-4 capitalize'
                >
                  <span className='block transition-all duration-300 group-focus:translate-x-3 hover:translate-x-3'>
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
