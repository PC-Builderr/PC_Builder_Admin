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
import { LOGIN_API_URL, ONE_SECOND_IN_MS } from '../../constants'
import { AuthContext } from '../../context/Auth/AuthContext'
import { AuthContextInterface } from '../../context/Auth/AuthContext.interface'
import { DecodedToken } from '../../types/token/DecodedToken'
import { TokenResponse } from '../../types/token/TokenResponse'

interface InputState {
    email: string
    password: string
}

interface UseLogin {
    credentials: InputState
    loading: boolean
    changeHandler: ChangeEventHandler
    submitHandler: FormEventHandler
}

export const useLogin = (): UseLogin => {
    const { setAuthState } = useContext<AuthContextInterface>(AuthContext)

    const toast = useToast()

    const [loading, setLoading] = useState<boolean>(false)
    const [credentials, setCredentials] = useState<InputState>({ email: '', password: '' })

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

            const response = await fetch(LOGIN_API_URL, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            })

            const data: TokenResponse = await response.json()

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

            const { exp, id }: DecodedToken = jwtDecode(data.token)

            setAuthState({
                exp: exp * ONE_SECOND_IN_MS,
                token: data.token,
                userId: id
            })
            setLoading(false)
        },
        [setAuthState, credentials, toast]
    )

    return { credentials, loading, changeHandler, submitHandler }
}
