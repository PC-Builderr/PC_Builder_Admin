import { Button, Container, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import React, { FunctionComponent } from 'react'
import { useLogin } from '../../hooks/Auth/useLogin'

export const Login: FunctionComponent = props => {
    const { loading, changeHandler, credentials, submitHandler } = useLogin()

    return (
        <Container as='form' mt='16' maxW='sm' onSubmit={submitHandler}>
            <Heading fontSize='2xl'>Login</Heading>
            <FormControl id='email' mt='4' isRequired>
                <FormLabel fontSize='sm'>Email address</FormLabel>
                <Input
                    type='email'
                    name='email'
                    value={credentials.email}
                    onChange={changeHandler}
                />
            </FormControl>
            <FormControl id='password' mt='3' isRequired>
                <FormLabel fontSize='sm'>Password</FormLabel>
                <Input
                    type='password'
                    name='password'
                    value={credentials.password}
                    onChange={changeHandler}
                />
            </FormControl>
            <Button isLoading={loading} type='submit' colorScheme='twitter' isFullWidth mt='7'>
                Login
            </Button>
        </Container>
    )
}
