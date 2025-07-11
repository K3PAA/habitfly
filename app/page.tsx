import { ModeToggle } from '@/components/ThemeButton'
import { Button } from '@/components/ui/button'
import Wrapper from '@/components/Wrapper'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <header className='bg-foreground'>
        <Wrapper className='grid gap-4 py-4 sm:grid-cols-2'>
          <p className='text-background text-3xl font-bold' aria-label='logo'>
            Habit<span className='text-primary'>fly</span>
          </p>

          <section className='flex items-center gap-4 sm:justify-self-end'>
            <AuthButtons />
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
              to your daily life. To access our application please{' '}
              <Link href='/login' className='text-primary font-bold'>
                login
              </Link>{' '}
              or{' '}
              <Link href='/register ' className='text-secondary font-bold'>
                register
              </Link>
              .
            </p>

            <section className='mt-8 flex items-center gap-4'>
              <AuthButtons />
            </section>
          </section>
          {/* Image of working application */}
        </Wrapper>

        <Wrapper>
          <h2 className='mt-40 text-center text-4xl font-bold sm:text-6xl'>
            Why choose us ?
          </h2>

          <ul className='mt-12 grid place-content-center gap-3'>
            <Card
              title='Tracking Habits made simple'
              desc='With our friendly interface making your habit list is really easy. It
          will take you only few minutes and will last forever.'
              src='/home/1.svg'
            />
            <Card
              title='Make your habits stick'
              desc='With tracking your habits you are more likely to stick to them. With using our application you greatly increases your chances of creating lasting changes.'
              src='/home/2.svg'
            />
            <Card
              title='Make your journey satisfying'
              desc='With modern interface and graphs you will see your progress easily. This will result in more motivation and satisfaction as you push through your habits.'
              src='/home/3.svg'
            />
          </ul>
        </Wrapper>
      </main>

      <footer className='bg-foreground text-background mt-16 text-center font-bold'>
        <Wrapper className='p-8'>
          <p>
            Created by{' '}
            <a
              href='https://github.com/K3PAA'
              className='underline underline-offset-4 transition-opacity duration-200 hover:opacity-80 focus:opacity-80'
            >
              @K3PAA
            </a>
          </p>
        </Wrapper>
      </footer>
    </>
  )
}
type CardProps = {
  title: string
  desc: string
  src: string
}
function Card({ title, desc, src }: CardProps) {
  return (
    <li className='border-foreground/8 grid rounded-2xl border-2 p-6 sm:grid-cols-[250px_auto] sm:gap-10 md:p-10'>
      <Image
        src={src}
        width={800}
        height={619}
        alt='illustration'
        className='mx-auto max-w-[300px] sm:mx-0 sm:max-w-[250px]'
      />
      <section className='mt-4 text-center sm:mt-0 sm:text-left'>
        <h3 className='text-4xl font-bold sm:text-2xl md:text-4xl'>{title}</h3>
        <p className='text-foreground/70 sm:text-md mt-4 max-w-[35ch] text-xl md:text-lg'>
          {desc}
        </p>
      </section>
    </li>
  )
}

function AuthButtons() {
  return (
    <>
      <Button
        variant='default'
        asChild
        className='font-bold uppercase'
        size='lg'
      >
        <Link href='/login'>Login</Link>
      </Button>

      <Button
        variant='secondary'
        asChild
        className='font-bold uppercase'
        size='lg'
      >
        <Link href='/register'>Register</Link>
      </Button>
    </>
  )
}
