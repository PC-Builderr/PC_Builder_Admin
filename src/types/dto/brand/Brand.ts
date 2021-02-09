import { Product } from '../product/Product'

export interface Brand {
    id: number
    name: string
    products?: Product[]
}
