import { useToast } from '@chakra-ui/react'
import { useCallback, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/Auth/AuthContext'
import { AuthContextInterface } from '../../context/Auth/AuthContext.interface'
import { Order } from '../../types/dto/order/Order'
import { OrderArrayResponse } from '../../types/dto/order/OrderArrayResponse'

interface UseGetOrders {
    orders: Order[] | null
    loading: boolean
}

export const useGetOrders = (url: string): UseGetOrders => {
    const [orders, setOrders] = useState<Order[] | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const { authState } = useContext<AuthContextInterface>(AuthContext)
    const toast = useToast()

    const fetchOrders = useCallback(async () => {
        setLoading(true)

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${authState?.token}`
            }
        })

        if (!response.ok) {
            let message: string = 'Bad Request'

            if (response.status >= 500) {
                message = 'Internal Server Error'
            }

            toast({
                title: 'Error occured.',
                description: message,
                status: 'error',
                duration: 4500,
                isClosable: true,
                position: 'top-right'
            })

            setLoading(false)
            return
        }

        const { orders }: OrderArrayResponse = await response.json()

        setOrders(orders)
        setLoading(false)
    }, [authState, toast, url])

    useEffect(() => {
        fetchOrders()
    }, [fetchOrders])

    return { orders, loading }
}
