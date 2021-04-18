import { Center, Heading, Spinner } from '@chakra-ui/react'
import React, { FunctionComponent } from 'react'
import { useParams } from 'react-router-dom'
import { HeaderTable } from '../../components/Order/HeaderTable'
import { PaymentDetailsTable } from '../../components/Order/PaymentDetailsTable'
import { PriceTable } from '../../components/Order/PriceTable'
import { ProductsTable } from '../../components/Order/ProductsTable'
import { ShippingAddressTable } from '../../components/Order/ShippingAddressTable'
import { ShippingDetailsTable } from '../../components/Order/ShippingDetailsTable'
import { useGetOrder } from '../../hooks/Orders/useGetOrder'

interface Params {
    id: string
}

export const Order: FunctionComponent = props => {
    const { id } = useParams<Params>()

    const { loading, order } = useGetOrder(id)

    if (loading) {
        return (
            <Center mt='20'>
                <Spinner size='lg' />
            </Center>
        )
    }

    if (!order) {
        return (
            <Center>
                <Heading size='lg'>Not Found</Heading>
            </Center>
        )
    }

    return (
        <>
            <HeaderTable order={order} />
            <PaymentDetailsTable order={order} />
            {order.shipmentNumber && <ShippingDetailsTable order={order} />}
            {order.shippingAddress && <ShippingAddressTable order={order} />}
            <ProductsTable order={order} />
            <PriceTable order={order} />
        </>
    )
}
