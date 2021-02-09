import { useToast } from '@chakra-ui/react'
import { useCallback, useContext } from 'react'
import { PROCESS_ORDER_API_URL } from '../../constants'
import { AuthContext } from '../../context/Auth/AuthContext'
import { AuthContextInterface } from '../../context/Auth/AuthContext.interface'

interface UseProcessOrder {
    processOrder: (id: number) => Promise<void>
}

export const useProcessOrder = (): UseProcessOrder => {
    const { authState } = useContext<AuthContextInterface>(AuthContext)
    const toast = useToast()

    const processOrder = useCallback(
        async (id: number) => {
            const response = await fetch(PROCESS_ORDER_API_URL, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${authState?.token}`
                },
                body: JSON.stringify({ orderId: id })
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

                return
            }

            toast({
                title: 'Success.',
                description: 'Order has been processed.',
                status: 'success',
                duration: 4500,
                isClosable: true,
                position: 'top-right'
            })
        },
        [authState, toast]
    )

    return { processOrder }
}
