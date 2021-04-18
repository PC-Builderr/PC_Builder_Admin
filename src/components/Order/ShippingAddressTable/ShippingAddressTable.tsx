import { Divider, Heading, Table, Tbody, Td, Tr } from '@chakra-ui/react'
import React, { FunctionComponent } from 'react'
import { Order } from '../../../types/dto/order/Order'

interface Props {
    order: Order
}

export const ShippingAddressTable: FunctionComponent<Props> = props => {
    const { order } = props

    return (
        <>
            <Heading mt='8' size='md'>
                Shipping Address
            </Heading>
            <Divider />
            <Table variant='unstyled' size='sm' width='md' mt='1'>
                <Tbody>
                    <Tr>
                        <Td paddingLeft='0'>Name</Td>
                        <Td fontWeight='bold'>{order.shippingAddress?.name}</Td>
                    </Tr>
                    <Tr>
                        <Td paddingLeft='0'>Email</Td>
                        <Td fontWeight='bold'>{order.user?.email}</Td>
                    </Tr>
                    <Tr>
                        <Td paddingLeft='0'>Phone Number</Td>
                        <Td fontWeight='bold'>{order.shippingAddress?.phone}</Td>
                    </Tr>
                    <Tr>
                        <Td paddingLeft='0'>City</Td>
                        <Td fontWeight='bold'>{order.shippingAddress?.city}</Td>
                    </Tr>
                    <Tr>
                        <Td paddingLeft='0'>Post Code</Td>
                        <Td fontWeight='bold'>{order.shippingAddress?.postCode}</Td>
                    </Tr>
                    <Tr>
                        <Td paddingLeft='0'>Address</Td>
                        <Td fontWeight='bold'>{order.shippingAddress?.address}</Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    )
}
