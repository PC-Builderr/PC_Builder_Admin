import { Divider, Heading, Table, Tbody, Td, Tr } from '@chakra-ui/react'
import React, { FunctionComponent } from 'react'
import { Order } from '../../../types/dto/order/Order'

interface Props {
    order: Order
}

export const PriceTable: FunctionComponent<Props> = props => {
    const { order } = props

    return (
        <>
            <Heading mt='8' size='md'>
                Price
            </Heading>
            <Divider />
            <Table variant='unstyled' size='sm' width='3xs' mt='1'>
                <Tbody>
                    <Tr>
                        <Td paddingLeft='0'>Product Price</Td>
                        <Td fontWeight='bold'>{order.productsPrice}лв.</Td>
                    </Tr>
                    {order.shippingPrice && (
                        <Tr>
                            <Td paddingLeft='0'>Shipping Price</Td>
                            <Td fontWeight='bold'>{order.shippingPrice}лв.</Td>
                        </Tr>
                    )}
                    <Tr>
                        <Td paddingLeft='0'>Total Price</Td>
                        <Td fontWeight='bold'>{order.total}лв.</Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    )
}
