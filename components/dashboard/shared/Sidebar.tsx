import Logo from '@/components/shared/Logo'
import { navLinks } from '@/lib/data'
import Link from 'next/link'
import Theme from './Theme'

export default function Sidebar() {
  return (
    <aside className='bg-card border-border text-card-foreground grid min-h-screen grid-rows-[5rem_1fr] border-r'>
      <Logo className='border-border flex items-center border-b px-4' />

      <section className='flex flex-col px-4 pb-20'>
        <h2 className='mt-4 text-xl font-bold'>Navigate</h2>
        <ul className='mt-2 grid gap-1'>
          {navLinks.map((item) => {
            return (
              <li key={item.to}>
                <Link
                  href={item.to}
                  className='group bg-secondary hover:bg-primary/10 focus:bg-primary/10 block rounded-md py-2 pl-4 capitalize transition-colors'
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
