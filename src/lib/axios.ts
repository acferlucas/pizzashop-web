import axios from 'axios'

import config from '@/config'

export const api = axios.create({
  baseURL: config.VITE_API_URL,
  withCredentials: true,
})
