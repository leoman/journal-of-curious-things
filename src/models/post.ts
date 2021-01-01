import { TableLinks } from './adminTable'

export interface PostI {
  id: number
  title: string
  subTitle?: string
  content: string
  slug: string
  status: string
  sticky: boolean
  mainImage: string
  excerpt: string
  date: number
  photo: string
}

export interface Posts {
  posts: PostI[]
}

export interface TableRowsI extends Posts, TableLinks {}

export interface TableRowI extends PostI, TableLinks {}