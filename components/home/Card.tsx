import Image from 'next/image'

type CardProps = {
  title: string
  desc: string
  src: string
}

export default function Card({ title, desc, src }: CardProps) {
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
