import { ChevronDownIcon } from '@chakra-ui/icons'
import {
    Button,
    Center,
    Divider,
    Flex,
    Heading,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Modal,
    ModalContent,
    ModalOverlay,
    Spacer,
    Spinner,
    Table,
    Tbody,
    Td,
    Tr
} from '@chakra-ui/react'
import { FunctionComponent, useMemo } from 'react'
import {
    FINISH_ORDER_API_URL,
    PROCESS_ORDER_API_URL,
    REQUEST_COURIER_API_URL
} from '../../../constants'
import { useProcessOrder } from '../../../hooks/Orders/useProcessOrder'
import { Order } from '../../../types/dto/order/Order'
import { ORDER_STATUS } from '../../../types/dto/order/OrderStatus'
import { TableLoader } from '../../Orders/TableLoader'

interface Props {
    order: Order
}

const ActionStatuses: string[] = [
    ORDER_STATUS.COURIER_REQUESTED,
    ORDER_STATUS.PROCESSING,
    ORDER_STATUS.PAYMENT_SUCCEEDED
]

export const HeaderTable: FunctionComponent<Props> = props => {
    const { order } = props

    const { isLoading, processOrder } = useProcessOrder()

    const requestCourier = processOrder(REQUEST_COURIER_API_URL, order.id)
    const proccess = processOrder(PROCESS_ORDER_API_URL, order.id)
    const finishOrder = processOrder(FINISH_ORDER_API_URL, order.id)

    const statusColor = useMemo<string>(() => {
        if (order.status === ORDER_STATUS.PAYMENT_SUCCEEDED) {
            return 'green.400'
        }

        if (order.status === ORDER_STATUS.PAYMENT_FAILED) {
            return 'red.500'
        }

        if (order.status === ORDER_STATUS.COURIER_REQUESTED) {
            return 'twitter.500'
        }

        if (order.status === ORDER_STATUS.PROCESSING) {
            return 'purple.400'
        }

        if (order.status === ORDER_STATUS.SHIPPED) {
            return 'yellow.300'
        }

        return 'gray.400'
    }, [order.status])

    return (
        <>
            <Flex>
                <Heading>Order</Heading>
                <Spacer />
                {ActionStatuses.includes(order.status) && (
                    <Menu>
                        <MenuButton
                            colorScheme='twitter'
                            as={Button}
                            rightIcon={<ChevronDownIcon />}
                        >
                            Actions
                        </MenuButton>
                        <MenuList>
                            {order.status === ORDER_STATUS.PAYMENT_SUCCEEDED && (
                                <MenuItem onClick={proccess}>Process Order</MenuItem>
                            )}
                            {order.status === ORDER_STATUS.PROCESSING && (
                                <MenuItem onClick={requestCourier}>Request Courier</MenuItem>
                            )}
                            {order.status === ORDER_STATUS.COURIER_REQUESTED ? (
                                <MenuItem onClick={finishOrder}>Finish Order</MenuItem>
                            ) : null}
                        </MenuList>
                    </Menu>
                )}
            </Flex>
            <Divider />
            <Table variant='unstyled'>
                <Tbody>
                    <Tr>
                        <Td paddingLeft='0'>ID</Td>
                        <Td>{order.id}</Td>
                    </Tr>
                    <Tr>
                        <Td paddingLeft='0'>Status</Td>
                        <Td color={statusColor} fontWeight='bold'>
                            {order.status}
                        </Td>
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
                                {process.env.REACT_APP_STRIPE_DASHBOARD_URL + order.paymentIntentId}
                            </Link>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
            <Modal isOpen={isLoading} onClose={() => {}}>
                <ModalOverlay />
                <ModalContent background='transparent' shadow='none'>
                    <Center mt='8' mb='6'>
                        <Spinner color='white' size='xl' />
                    </Center>
                </ModalContent>
            </Modal>
        </>
    )
}
