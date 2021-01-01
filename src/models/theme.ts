import { TableLinks } from './adminTable'

export interface ThemeI {
  id: number
  name: string
}

export interface Themes {
  themes: ThemeI[]
}

export interface TableRowsI extends Themes, TableLinks {}

export interface TableRowI extends ThemeI, TableLinks {}