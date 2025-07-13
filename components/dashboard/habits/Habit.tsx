import { Sparkles } from 'lucide-react'

export default function Habit() {
  return (
    <section className='grid grid-cols-[1fr_auto] gap-y-5 rounded-sm border-2 border-cyan-600 bg-green-300 p-2'>
      <div>
        <p className='text-sm'>morning</p>
        <h3 className='-mt-1 text-2xl font-bold'>Meditate</h3>
      </div>
      <button className='grid h-16 w-16 cursor-pointer place-content-center rounded-full border-2 border-cyan-600'>
        0 / 1
      </button>

      <p className='col-span-2 -mt-8 max-w-[30ch]'>
        Meditate every morning for 5 minutes. Freshly after waking up.
      </p>

      <p className='flex items-center gap-1'>
        <Sparkles />3 days streak
      </p>
      <button className='cursor-pointer underline'>edit</button>
    </section>
  )
}
