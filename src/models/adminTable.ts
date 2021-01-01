export interface TableLinks {
  previewLink?: (id: number) => void
  editLink?: (id: number) => void
  deleteLink?: (id: number) => void
}