import { TableLinks } from './adminTable'

export interface GalleryImageI {
  id: number
  url: string
  position: number
  title?: string
}

export interface GalleryImages {
  themes: GalleryImageI[]
}

export interface TableRowsI extends GalleryImages, TableLinks {}

export interface TableRowI extends GalleryImageI, TableLinks {}