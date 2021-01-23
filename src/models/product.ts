import { TableLinks } from './adminTable'
import { ThemeI } from './theme'

export interface ProductImages {
  id: number
  url: string
  title?: string
  local?: boolean
}

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
  productImage?: ProductImages[]
  themes?: ThemeI[]
  images?: string[]
}

export interface Products {
  products: ProductI[]
}

export interface TableRowsI extends Products, TableLinks {}

export interface TableRowI extends ProductI, TableLinks {}