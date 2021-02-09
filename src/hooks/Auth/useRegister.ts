import { useToast } from '@chakra-ui/react'
import jwtDecode from 'jwt-decode'
import {
    ChangeEvent,
    ChangeEventHandler,
    FormEvent,
    FormEventHandler,
    useCallback,
    useContext,
    useState
} from 'react'
import { LOGIN_API_URL, ONE_SECOND_IN_MS, REGISTER_API_URL } from '../../constants'
import { AuthContext } from '../../context/Auth/AuthContext'
import { AuthContextInterface } from '../../context/Auth/AuthContext.interface'
import { DecodedToken } from '../../types/token/DecodedToken'
import { TokenResponse } from '../../types/token/TokenResponse'

interface InputState {
    name: string
    email: string
    password: string
}

interface UseRegister {
    credentials: InputState
    loading: boolean
    changeHandler: ChangeEventHandler
    submitHandler: FormEventHandler
}

export const useRegister = (): UseRegister => {
    const toast = useToast()

    const { authState } = useContext<AuthContextInterface>(AuthContext)

    const [loading, setLoading] = useState<boolean>(false)
    const [credentials, setCredentials] = useState<InputState>({
        name: '',
        email: '',
        password: ''
    })

    const changeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setCredentials((cred: InputState) => ({
            ...cred,
            [event.target.name]: event.target.value
        }))
    }, [])

    const submitHandler = useCallback(
        async (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault()

            setLoading(true)

            const response = await fetch(REGISTER_API_URL, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${authState?.token}`
                },
                body: JSON.stringify(credentials)
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

            toast({
                title: 'Account created.',
                description: "We've created your account for you.",
                status: 'success',
                duration: 4500,
                isClosable: true,
                position: 'top-right'
            })
            setLoading(false)
        },
        [credentials, toast, authState]
    )

    return { credentials, loading, changeHandler, submitHandler }
}
