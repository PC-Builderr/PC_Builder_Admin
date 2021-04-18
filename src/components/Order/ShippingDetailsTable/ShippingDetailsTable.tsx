import { Divider, Heading, Table, Tbody, Td, Tr, Link } from '@chakra-ui/react'
import React, { FunctionComponent, useMemo } from 'react'
import { Order } from '../../../types/dto/order/Order'
import { ORDER_STATUS } from '../../../types/dto/order/OrderStatus'

interface Props {
    order: Order
}

export const ShippingDetailsTable: FunctionComponent<Props> = props => {
    const { order } = props

    let statusColor = useMemo<string>(
        () => (order.status === ORDER_STATUS.SHIPPED ? 'green.400' : 'purple.400'),
        [order.status]
    )

    return (
        <>
            <Heading mt='8' size='md'>
                Shipping Details
            </Heading>
            <Divider />
            <Table variant='unstyled' size='sm' width='xl' mt='1'>
                <Tbody>
                    <Tr>
                        <Td paddingLeft='0'>Shipment Number</Td>
                        <Td fontWeight='bold'>{order.shipmentNumber}</Td>
                    </Tr>
                    {order.expectedDeliveryDate && (
                        <Tr>
                            <Td paddingLeft='0'>Expected Delivery Date </Td>
                            <Td fontWeight='bold'>
                                {new Date(order.expectedDeliveryDate).toDateString()}
                            </Td>
                        </Tr>
                    )}
                    <Tr>
                        <Td paddingLeft='0'>Shipping Price</Td>
                        <Td fontWeight='bold'>{order.shippingPrice}лв.</Td>
                    </Tr>
                    <Tr>
                        <Td paddingLeft='0'>PDF URL</Td>
                        <Td>
                            <Link color='blue.600' href={order.pdfURL} isExternal>
                                {order.pdfURL?.slice(0, 50)}...
                            </Link>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td paddingLeft='0'>Shipping Status</Td>
                        <Td fontWeight='bold' color={statusColor}>
                            {order.status}
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    )
}
