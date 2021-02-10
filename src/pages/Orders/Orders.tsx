import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React, { FunctionComponent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { OrdersTable } from '../../components/Orders/OrdersTable'
import {
    ADMIN_ORDERS_API_URL,
    ALL_ORDERS_API_URL,
    PAYED_ORDERS_API_URL,
    SHIPPED_ORDERS_API_URL
} from '../../constants'

interface Props {}

export const Orders: FunctionComponent<Props> = props => {
    const { search } = useLocation()

    const params: URLSearchParams = new URLSearchParams(search)

    if (!params.has('tab')) {
        params.set('tab', '0')
    }

    const index: number = Number(params.get('tab')) ?? 0

    return (
        <Tabs index={index} mt='4' variant='enclosed' colorScheme='twitter'>
            <TabList>
                <Tab as={Link} to='/orders?tab=0'>
                    Available Orders
                </Tab>
                <Tab as={Link} to='/orders?tab=1'>
                    Your Orders
                </Tab>
                <Tab as={Link} to='/orders?tab=2'>
                    Shipped Orders
                </Tab>
                <Tab as={Link} to='/orders?tab=3'>
                    All Orders
                </Tab>
            </TabList>
            <TabPanels borderBottomRadius='lg' border='1px' borderColor='gray.100' pb='0'>
                <TabPanel pb='0'>
                    {index === 0 && <OrdersTable url={PAYED_ORDERS_API_URL} />}
                </TabPanel>
                <TabPanel>{index === 1 && <OrdersTable url={ADMIN_ORDERS_API_URL} />}</TabPanel>
                <TabPanel>{index === 2 && <OrdersTable url={SHIPPED_ORDERS_API_URL} />}</TabPanel>
                <TabPanel>{index === 3 && <OrdersTable url={ALL_ORDERS_API_URL} />}</TabPanel>
            </TabPanels>
        </Tabs>
    )
}
