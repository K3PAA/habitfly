'use client'

import { useState, useTransition } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { deleteAllEntries } from '@/app/actions/actions'

type DeleteHabitButtonProps = {
  habitId: number
  title: string
}

export const DeleteHabitButton = ({
  habitId,
  title,
}: DeleteHabitButtonProps) => {
  const [open, setOpen] = useState(false)
  const [isPending, startTransition] = useTransition()

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleDeleteAll = () => {
    startTransition(async () => {
      await deleteAllEntries({ habitId })
      setOpen(false)
    })
  }

  return (
    <>
      <Button
        variant='link'
        className='text-destructive p-1 text-xs underline'
        aria-label={`Delete ${title} habit`}
        tabIndex={0}
        onClick={handleOpen}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') handleOpen()
        }}
      >
        delete
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className='max-w-sm'>
          <DialogHeader>
            <DialogTitle>
              {`Are you sure that you want to delete "${title}" habit?`}
            </DialogTitle>
          </DialogHeader>
          <div className='mt-2 flex flex-col gap-2'>
            <Button
              variant='secondary'
              className='w-full'
              onClick={handleClose}
              aria-label='Cancel deletion'
              tabIndex={0}
              disabled={isPending}
            >
              Cancel
            </Button>

            <Button
              variant='destructive'
              className='border-destructive w-full border'
              onClick={handleDeleteAll}
              aria-label='Delete permanently'
              tabIndex={0}
              disabled={isPending}
            >
              Delete Permanently
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default DeleteHabitButton
