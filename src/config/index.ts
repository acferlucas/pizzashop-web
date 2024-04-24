import { z } from 'zod'

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
})

export default envSchema.parse(import.meta.env)
