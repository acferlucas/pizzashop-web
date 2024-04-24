import { api } from '@/lib/axios'

export type SignInBody = {
  email: string
}

export async function handleAuthenticate({ email }: SignInBody): Promise<void> {
  await api.post('/authenticate', { email })
}
