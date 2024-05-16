import axios from 'axios'

import config from '@/config'

export const api = axios.create({
  baseURL: config.VITE_API_URL,
  withCredentials: true,
})

if (config.VITE_ENABLE_API_DELAY) {
  api.interceptors.request.use(async (conf) => {
    await new Promise((resolve) =>
      setTimeout(resolve, Math.round(Math.random() * 3000)),
    )

    return conf
  })
}
