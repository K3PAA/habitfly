import Image from 'next/image'

type CardProps = {
  title: string
  desc: string
  src: string
}

export default function Card({ title, desc, src }: CardProps) {
  return (
    <li className='bg-card border-foreground/8 mx-auto flex max-w-3xl flex-col items-center overflow-hidden rounded-2xl border-2 p-6 shadow-md md:flex-row md:items-start md:p-10'>
      <div className='flex w-full flex-shrink-0 items-center justify-center sm:w-[220px]'>
        <Image
          src={src}
          width={220}
          height={170}
          alt='illustration'
          className='h-auto w-full max-w-[220px] rounded-xl object-contain'
        />
      </div>
      <section className='mt-6 flex flex-1 flex-col justify-center text-center sm:mt-0 sm:ml-8 md:text-left'>
        <h3 className='text-2xl font-bold md:text-3xl'>{title}</h3>
        <p className='text-foreground/70 mx-auto mt-4 max-w-prose text-lg sm:mx-0 md:text-xl'>
          {desc}
        </p>
      </section>
    </li>
  )
}
