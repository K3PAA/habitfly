import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getDayInfo(date: Date) {
  const monthShort = date.toLocaleDateString('en-US', { month: 'short' })
  const dayShort = date.toLocaleDateString('en-US', { weekday: 'short' })
  const dayNumber = date.getDate()

  return { dayNumber, dayShort, monthShort }
}

export function sameDayOfYear(date1: Date, date2: Date) {
  return date1.toLocaleDateString() === date2.toLocaleDateString()
}
