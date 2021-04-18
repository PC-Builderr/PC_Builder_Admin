import { useToast } from '@chakra-ui/react'
import { useCallback, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/Auth/AuthContext'
import { AuthContextInterface } from '../../context/Auth/AuthContext.interface'
import { Order } from '../../types/dto/order/Order'
import { OrderResponse } from '../../types/dto/order/OrderResponse'
import { FULL_ORDER_API_URL } from '../../constants'

interface UseGetOrder {
    order: Order | null
    loading: boolean
}

export const useGetOrder = (id: string): UseGetOrder => {
    const [order, setOrder] = useState<Order | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const { authState } = useContext<AuthContextInterface>(AuthContext)
    const toast = useToast()

    const fetchOrder = useCallback(async () => {
        setLoading(true)

        const response = await fetch(FULL_ORDER_API_URL + id, {
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

        const { order }: OrderResponse = await response.json()

        setOrder(order)
        setLoading(false)
    }, [authState, toast, id])

    useEffect(() => {
        fetchOrder()
    }, [fetchOrder])

    return { order, loading }
}
