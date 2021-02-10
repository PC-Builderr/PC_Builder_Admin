import { Table, Tbody } from '@chakra-ui/react'
import React, { FunctionComponent } from 'react'
import { useGetOrders } from '../../../hooks/Orders/useGetOrders'
import { Order } from '../../../types/dto/order/Order'
import { TableHead } from '../TableHead'
import { TableLoader } from '../TableLoader'
import { TableRow } from '../TableRow'

interface Props {
    url: string
}

export const OrdersTable: FunctionComponent<Props> = props => {
    const { orders, loading } = useGetOrders(props.url)

    return (
        <>
            <Table variant='simple'>
                <TableHead />
                <Tbody>
                    {orders?.map((order: Order) => (
                        <TableRow order={order} key={order.id} />
                    ))}
                </Tbody>
            </Table>
            <TableLoader loading={loading} />
        </>
    )
}
