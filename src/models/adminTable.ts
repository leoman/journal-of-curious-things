export interface TableLinks {
  previewLink?: (slug: string) => void
  editLink?: (id: number) => void
  deleteLink?: (id: number) => void
}