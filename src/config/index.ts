import { z } from 'zod'

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
  VITE_ENABLE_API_DELAY: z.string().transform((val) => val === 'true'),
})

export default envSchema.parse(import.meta.env)
