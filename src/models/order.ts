import { TableLinks } from './adminTable'

export interface OrderI {
  id: number
  name: string
  email: string
  status: string
  pricePence: number
  token: string
  charge_id: string
  error_message: string
  productId: number
}

export interface Orders {
  orders: OrderI[]
}

export interface TableRowsI extends Orders, TableLinks {}

export interface TableRowI extends OrderI, TableLinks {}