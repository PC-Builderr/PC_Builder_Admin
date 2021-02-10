import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Link, Menu, MenuButton, MenuItem, MenuList, Td, Tr } from '@chakra-ui/react'
import React, { FunctionComponent } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
    REQUEST_COURIER_API_URL,
    PROCESS_ORDER_API_URL,
    FINISH_ORDER_API_URL
} from '../../../constants'
import { useProcessOrder } from '../../../hooks/Orders/useProcessOrder'
import { Order } from '../../../types/dto/order/Order'

interface Props {
    order: Order
}

export const TableRow: FunctionComponent<Props> = ({ order, children }) => {
    const requestCourier = useProcessOrder(REQUEST_COURIER_API_URL, order.id)
    const processOrder = useProcessOrder(PROCESS_ORDER_API_URL, order.id)
    const finishOrder = useProcessOrder(FINISH_ORDER_API_URL, order.id)

    let statusColor: string = 'gray.400'

    if (order.status === 'PAYMENT_SUCCEEDED') {
        statusColor = 'green.400'
    }

    if (order.status === 'PAYMENT_FAILED') {
        statusColor = 'red.500'
    }

    if (order.status === 'COURIER_REQUESTED') {
        statusColor = 'twitter.500'
    }

    if (order.status === 'PROCESSING') {
        statusColor = 'purple.400'
    }

    if (order.status === 'SHIPPED') {
        statusColor = 'yellow.300'
    }

    return (
        <Tr key={order.id}>
            <Td textAlign='center'>{order.id}</Td>
            <Td>
                <Link
                    color='blue.600'
                    href={process.env.REACT_APP_STRIPE_DASHBOARD_URL + order.paymentIntentId}
                    isExternal
                >
                    {(process.env.REACT_APP_STRIPE_DASHBOARD_URL + order.paymentIntentId).slice(
                        0,
                        22
                    )}
                    ...
                </Link>
            </Td>
            <Td>
                <Link color='blue.600' href={order.pdfURL} isExternal>
                    {order.pdfURL?.slice(0, 22)}...
                </Link>
            </Td>
            <Td>
                <Link color='blue.600' href={order.recieptUrl} isExternal>
                    {order.recieptUrl?.slice(0, 22)}...
                </Link>
            </Td>
            <Td fontSize='0.8rem' fontWeight='bold' color={statusColor}>
                {order.status}
            </Td>
            <Td fontWeight='semibold' color='gray.600' textAlign='center'>
                {order.total}лв.
            </Td>
            <Td alignItems='center'>
                <Menu>
                    <MenuButton colorScheme='twitter' as={Button} rightIcon={<ChevronDownIcon />}>
                        Actions
                    </MenuButton>
                    <MenuList>
                        <MenuItem as={RouterLink} to={`/orders/${order.id}`}>
                            Open Order
                        </MenuItem>
                        {order.status === 'PAYMENT_SUCCEEDED' && (
                            <MenuItem onClick={processOrder}>Process Order</MenuItem>
                        )}
                        {order.status === 'PROCESSING' && (
                            <MenuItem onClick={requestCourier}>Request Courier</MenuItem>
                        )}
                        {order.status === 'COURIER_REQUESTED' ? (
                            <MenuItem onClick={finishOrder}>Finish Order</MenuItem>
                        ) : null}
                    </MenuList>
                </Menu>
            </Td>
        </Tr>
    )
}
