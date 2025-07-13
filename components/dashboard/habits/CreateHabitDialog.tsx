'use client'
import { Plus } from 'lucide-react'

import { createHabit } from '@/app/actions/actions'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useRef } from 'react'

export default function CreateHabitDialog() {
  const formRef = useRef<HTMLFormElement>(null)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type='button'>
          Create Habit <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create new Habit</DialogTitle>
        </DialogHeader>
        <form
          ref={formRef}
          action={async (formData) => {
            formRef.current?.reset()
            console.log('sub')
            await createHabit(formData)
          }}
        >
          <div className='grid w-full max-w-sm items-center gap-3'>
            <Label htmlFor='title'>What are you trying to do ?</Label>
            <Input type='text' id='title' placeholder='Name your habit' />
          </div>

          <div className='grid w-full max-w-sm items-center gap-3'>
            <Label htmlFor='goal'>
              How many times a day would you like to do it ?
            </Label>
            <Input type='number' id='goal' min={1} />
          </div>

          <div className='grid w-full max-w-sm items-center gap-3'>
            <Label htmlFor='description'>
              What is your goal with this habit ?
            </Label>
            <Textarea
              className='h-16 max-h-40'
              id='description'
              placeholder='e.g. I want to perform {habit} in {location} after {previous activity}.'
            />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type='button' variant='destructive'>
                close
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type='submit'>create</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
