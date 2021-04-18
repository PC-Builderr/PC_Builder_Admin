import { useToast } from '@chakra-ui/react'
import { useCallback, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../context/Auth/AuthContext'
import { AuthContextInterface } from '../../context/Auth/AuthContext.interface'

export interface UseProcessOrder {
    processOrder: (url: string, id: number, redirectUrl?: string) => () => Promise<void>
    isLoading: boolean
}

export const useProcessOrder = (): UseProcessOrder => {
    const { authState } = useContext<AuthContextInterface>(AuthContext)

    const history = useHistory()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const toast = useToast()

    const processOrder = useCallback(
        (url: string, id: number, redirectUrl?: string) => {
            return async () => {
                setIsLoading(true)
                const response = await fetch(url, {
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
                    setIsLoading(false)
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

                setIsLoading(false)
                if (redirectUrl) {
                    history.push(redirectUrl)
                    return
                }

                window.location.reload()
            }
        },
        [authState, toast, history]
    )

    return { processOrder, isLoading }
}
