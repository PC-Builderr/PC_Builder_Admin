import { ChevronDownIcon } from '@chakra-ui/icons'
import {
    Button,
    Center,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Spinner,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from '@chakra-ui/react'
import React, { FunctionComponent } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { ADMIN_ORDERS_API_URL } from '../../../constants'
import { useGetOrders } from '../../../hooks/Orders/useGetOrders'
import { Order } from '../../../types/dto/order/Order'

interface Props {}

export const AdminOrdersTable: FunctionComponent<Props> = props => {
    const { orders, loading } = useGetOrders(ADMIN_ORDERS_API_URL)

    return (
        <>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th textAlign='center'>ID</Th>
                        <Th>Order Link</Th>
                        <Th>Stripe Dashboard link</Th>
                        <Th>Order reciept</Th>
                        <Th>Status</Th>
                        <Th textAlign='center'>Total</Th>
                        <Th textAlign='center'>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {orders?.map((order: Order) => (
                        <Tr key={order.id}>
                            <Td textAlign='center'>{order.id}</Td>
                            <Td>
                                <Link color='blue.600' as={RouterLink} to={`/orders/${order.id}`}>
                                    {`${window.location.href}/${order.id}`.slice(0, 20)}...
                                </Link>
                            </Td>
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
                                    ).slice(0, 25)}
                                    ...
                                </Link>
                            </Td>
                            <Td>
                                <Link color='blue.600' href={order.recieptUrl} isExternal>
                                    {order.recieptUrl?.slice(0, 25)}...
                                </Link>
                            </Td>
                            <Td fontSize='0.8rem' fontWeight='bold' color='twitter.500'>
                                {order.status}
                            </Td>
                            <Td fontWeight='semibold' color='gray.600' textAlign='center'>
                                {order.total}лв.
                            </Td>
                            <Td alignItems='center'>
                                <Menu>
                                    <MenuButton
                                        colorScheme='twitter'
                                        as={Button}
                                        rightIcon={<ChevronDownIcon />}
                                    >
                                        Actions
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem as={RouterLink} to={`/orders/${order.id}`}>
                                            Open Order
                                        </MenuItem>
                                        <MenuItem>Request Courier</MenuItem>
                                    </MenuList>
                                </Menu>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            {loading && (
                <Center mt='8' mb='6'>
                    <Spinner size='lg' />
                </Center>
            )}
        </>
    )
}
