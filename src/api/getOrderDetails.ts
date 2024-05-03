import { api } from '@/lib/axios'

export type getOrderDetailsParams = {
  orderId: string
}

export type OrderDetailsResponse = {
  id: string
  createdAt: string
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  totalInCents: number
  customer: {
    name: string
    email: string
    phone: string | null
  }
  orderItems: {
    id: string
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }[]
}

export async function getOrderDetails({ orderId }: getOrderDetailsParams) {
  const { data } = await api.get<OrderDetailsResponse>(`/orders/${orderId}`)

  return data
}
