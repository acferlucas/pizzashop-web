import { api } from '@/lib/axios'

export type GetOrdersQuery = {
  pageIndex?: number | null
}

export type getOrdersResponse = {
  orders: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getOrders({ pageIndex }: GetOrdersQuery) {
  const { data } = await api.get<getOrdersResponse>('/orders', {
    params: {
      pageIndex,
    },
  })

  return data
}
