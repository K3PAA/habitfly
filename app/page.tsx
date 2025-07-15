import Card from '@/components/home/Card'

import Wrapper from '@/components/shared/Wrapper'
import { home } from '@/lib/data'

import Footer from '@/components/home/Footer'
import Header from '@/components/home/Header'
import LoginButton from '@/components/shared/LoginButton'
import RegisterButton from '@/components/shared/RegisterButton'
import Image from 'next/image'

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'

export default async function Page() {
  const { isAuthenticated } = getKindeServerSession()
  if (await isAuthenticated()) {
    redirect('/habits/daily')
  }

  return (
    <div className='bg-background min-h-screen w-full'>
      <Header />
      <main>
        <Wrapper className='flex flex-col-reverse items-center justify-center gap-12 py-16 md:grid md:grid-cols-2 md:gap-8 md:py-24'>
          <section className='flex flex-col items-center gap-8 md:items-start md:justify-center'>
            <h1 className='text-center text-4xl font-bold sm:text-5xl md:text-left lg:text-6xl'>
              Make tracking your habits simple
            </h1>

            <p className='text-foreground/70 max-w-[40ch] text-center text-lg md:text-left'>
              Our goal is{' '}
              <span className='text-foreground'>
                to make trcking your habits and goals as easy as possible{' '}
              </span>
              . That way you are more likely to stick to them and introduce them
              to your daily life. To access our application please login or
              register.
            </p>

            <div className='flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row md:justify-start'>
              <LoginButton />
              <RegisterButton />
            </div>
          </section>

          <div className='flex w-full items-center justify-center'>
            <Image
              src='/home/home.svg'
              width={800}
              height={619}
              alt='Home page image'
              className='h-auto w-full max-w-[400px] rounded-xl drop-shadow-xl md:max-w-[600px] lg:max-w-[800px]'
              priority
            />
          </div>
        </Wrapper>

        <Wrapper>
          <h2 className='mt-32 text-center text-3xl font-bold sm:text-4xl md:text-6xl'>
            Why choose us ?
          </h2>

          <ul className='mt-12 grid place-content-center gap-6'>
            {home.whyUs.map((card) => {
              return <Card key={card.title} {...card} />
            })}
          </ul>
        </Wrapper>
      </main>

      <Footer />
    </div>
  )
}
