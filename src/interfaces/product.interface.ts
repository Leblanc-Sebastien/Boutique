import type { Category } from './Types'

export interface ProductInterface {
  _id: string
  title: string
  image: string
  price: number
  description: string
  category: Category
  createdAt: string
}
