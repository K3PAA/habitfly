import Card from '@/components/home/Card'
import { ModeToggle } from '@/components/ThemeButton'

import Wrapper from '@/components/shared/Wrapper'
import { home } from '@/lib/data'

import LoginButton from '@/components/shared/LoginButton'
import RegisterButton from '@/components/shared/RegisterButton'
import Footer from '@/components/home/Footer'
import Logo from '@/components/shared/Logo'

export default function Page() {
  return (
    <>
      <header className='bg-foreground'>
        <Wrapper className='grid gap-4 py-4 sm:grid-cols-2'>
          <Logo />

          <section className='flex items-center gap-4 sm:justify-self-end'>
            <LoginButton />
            <RegisterButton />
            <ModeToggle />
          </section>
        </Wrapper>
      </header>

      <main>
        <Wrapper className='grid md:grid-cols-2'>
          <section className='pt-24'>
            <h1 className='text-6xl font-bold'>
              Make tracking your habits simple
            </h1>

            <p className='text-foreground/70 mt-4 max-w-[40ch] text-lg'>
              Our goal is{' '}
              <span className='text-foreground'>
                to make trcking your habits and goals as easy as possible{' '}
              </span>
              . That way you are more likely to stick to them and introduce them
              to your daily life. To access our application please login or
              register.
            </p>

            <section className='mt-8 flex items-center gap-4'>
              <LoginButton />
              <RegisterButton />
            </section>
          </section>
          {/* Image of working application */}
        </Wrapper>

        <Wrapper>
          <h2 className='mt-40 text-center text-4xl font-bold sm:text-6xl'>
            Why choose us ?
          </h2>

          <ul className='mt-12 grid place-content-center gap-3'>
            {home.whyUs.map((card) => {
              return <Card key={card.title} {...card} />
            })}
          </ul>
        </Wrapper>
      </main>

      <Footer />
    </>
  )
}
