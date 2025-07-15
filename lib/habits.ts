export function extractFormData(formData: FormData) {
  const rawData = {
    title: formData.get('title'),
    description: formData.get('description'),
    progressToGo: Number(formData.get('goal')),
    important: formData.get('important') === 'on',
    mode: formData.get('mode') ?? 'daily',
    timeOfDay: formData.get('timeOfDay') ?? 'any_time',
  }
  return rawData
}
