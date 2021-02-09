import { User } from '../user/User'
import { OrderProduct } from './OrderProduct'
import { ShippingAddress } from './ShippingAddress'

export interface Order {
    id: number
    shippingPrice: number
    productsPrice: number
    recieptUrl?: string
    paymentIntentId: string
    total: number
    status: string
    userId: number
    shippingAddressId?: number
    shippingAddress?: ShippingAddress
    user?: User
    orderProducts?: OrderProduct[]
}
