import Loader from '@/components/shared/Loader'

export default function Fallback() {
  return (
    <div className='mt-12 flex flex-col items-center justify-center gap-6'>
      <h3 className='text-4xl font-bold'>Loading habits...</h3>
      <Loader />
    </div>
  )
}
