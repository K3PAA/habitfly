'use client'

import { buttonClickAction } from '@/app/actions/actions'
import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

export type IncreaseButtonProps = {
  entryId: number
  progressCurrent: number
  progressToGo: number
}

export default function IncreaseButton({
  entryId,
  progressCurrent,
  progressToGo,
}: IncreaseButtonProps) {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleClick = async () => {
    startTransition(async () => {
      buttonClickAction({ entryId, progressCurrent, progressToGo })
      router.refresh()
    })
  }

  return (
    <button
      className={cn(
        'border-primary text-primary bg-card flex h-12 w-12 items-center justify-center rounded-full border-2 text-lg font-bold shadow-sm',
        isPending && 'text-muted-foreground border-muted-foreground',
      )}
      disabled={isPending}
      onClick={handleClick}
      aria-label='Increment progress'
      tabIndex={0}
    >
      {progressCurrent}/{progressToGo}
    </button>
  )
}
