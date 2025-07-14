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
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select'
import { usePathname } from 'next/navigation'

export default function CreateHabitDialog() {
  const formRef = useRef<HTMLFormElement>(null)
  const pathname = usePathname()

  // Helper to extract habit type from path
  const getHabitType = () => {
    if (pathname?.includes('/habits/daily')) return 'daily'
    if (pathname?.includes('/habits/weekly')) return 'weekly'
    if (pathname?.includes('/habits/monthly')) return 'monthly'
    return 'daily' // default fallback
  }

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
            formData.set('mode', getHabitType())
            const res = await createHabit(formData)
            console.log(res)
          }}
          className='grid gap-2'
        >
          <div className='grid w-full max-w-sm items-center gap-3'>
            <Label htmlFor='title'>What are you trying to do ?</Label>
            <Input
              type='text'
              name='title'
              id='title'
              placeholder='Name your habit'
            />
          </div>

          <div className='grid w-full max-w-sm items-center gap-3'>
            <Label htmlFor='goal'>
              How many times a day would you like to do it ?
            </Label>
            <Input type='number' id='goal' name='goal' min={1} />
          </div>

          <div className='grid w-full max-w-sm items-center gap-3'>
            <Label htmlFor='description'>
              What is your goal with this habit ?
            </Label>
            <Textarea
              className='max-h-40'
              id='description'
              name='description'
              placeholder='e.g. I want to perform {habit} in {location} after {previous activity}.'
            />
          </div>

          <div className='grid w-full max-w-sm items-center gap-3'>
            <Label htmlFor='timeOfDay'>
              When do you want to do this habit?
            </Label>
            <Select name='timeOfDay' defaultValue='any_time'>
              <SelectTrigger id='timeOfDay'>
                <SelectValue placeholder='Any time' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='morning'>Morning</SelectItem>
                <SelectItem value='afternoon'>Afternoon</SelectItem>
                <SelectItem value='evening'>Evening</SelectItem>
                <SelectItem value='any_time'>Any time</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className='flex items-center gap-2'>
            <Checkbox id='important' name='important' />
            <Label htmlFor='important'>Is this goal important for you ?</Label>
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
