import { Divider, Heading, Link, Table, Tbody, Td, Tr } from '@chakra-ui/react'
import React, { FunctionComponent, useMemo } from 'react'
import { Order } from '../../../types/dto/order/Order'
import { ORDER_STATUS } from '../../../types/dto/order/OrderStatus'

interface Props {
    order: Order
}

interface StatusProps {
    status: string
    statusColor: string
}

export const PaymentDetailsTable: FunctionComponent<Props> = props => {
    const { order } = props

    const { status, statusColor } = useMemo<StatusProps>(() => {
        if (order.status === ORDER_STATUS.AWAITING_PAYMENT) {
            return {
                status: ORDER_STATUS.AWAITING_PAYMENT,
                statusColor: 'gray.400'
            }
        }

        if (order.status === ORDER_STATUS.PAYMENT_FAILED) {
            return { status: ORDER_STATUS.PAYMENT_FAILED, statusColor: 'red.500' }
        }

        return {
            status: ORDER_STATUS.PAYMENT_SUCCEEDED,
            statusColor: 'green.400'
        }
    }, [order.status])

    return (
        <>
            <Heading mt='8' size='md'>
                Payment Details
            </Heading>
            <Divider />
            <Table variant='unstyled' size='sm' width='2xl' mt='1'>
                <Tbody>
                    <Tr>
                        <Td paddingLeft='0'>Payment Intent ID</Td>
                        <Td fontWeight='bold'>{order.paymentIntentId}</Td>
                    </Tr>
                    <Tr>
                        <Td paddingLeft='0'>Stripe Dashboard</Td>
                        <Td>
                            <Link
                                color='blue.600'
                                href={
                                    process.env.REACT_APP_STRIPE_DASHBOARD_URL +
                                    order.paymentIntentId
                                }
                                isExternal
                            >
                                {(
                                    process.env.REACT_APP_STRIPE_DASHBOARD_URL +
                                    order.paymentIntentId
                                ).slice(0, 50)}
                                ...
                            </Link>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td paddingLeft='0'>Reciept</Td>
                        <Td>
                            <Link color='blue.600' href={order.recieptUrl} isExternal>
                                {order.recieptUrl?.slice(0, 50)}...
                            </Link>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td paddingLeft='0'>Payment Status</Td>
                        <Td fontWeight='bold' color={statusColor}>
                            {status}
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    )
}
