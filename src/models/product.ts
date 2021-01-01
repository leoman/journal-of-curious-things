import { TableLinks } from './adminTable'

export interface ProductI {
  id: number
  title: string
  subTitle?: string
  productType: string
  content: string
  slug?: string
  pricePence: number
  priceCurrency?: string
  status: string
  date: number
  photo: string
}

export interface Products {
  products: ProductI[]
}

export interface TableRowsI extends Products, TableLinks {}

export interface TableRowI extends ProductI, TableLinks {}