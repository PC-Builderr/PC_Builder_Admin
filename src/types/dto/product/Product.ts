import { Brand } from '../brand/Brand'
import { Image } from '../image/Image'

export interface Product {
    id: number
    name: string
    metaData?: string
    images?: Image[]
    brandId?: number
    brand?: Brand
    description?: string
    price: number
    type: string
}
