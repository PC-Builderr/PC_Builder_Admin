import { Button, Container, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import React, { FunctionComponent } from 'react'
import { useRegister } from '../../hooks/Auth/useRegister'

export const Register: FunctionComponent = props => {
    const { changeHandler, credentials, loading, submitHandler } = useRegister()

    return (
        <Container onSubmit={submitHandler} as='form' mt='16' maxW='sm'>
            <Heading fontSize='2xl' color='gray.800'>
                Create Account
            </Heading>
            <FormControl id='name' mt='4' isRequired>
                <FormLabel fontSize='sm'>Name</FormLabel>
                <Input type='name' name='name' value={credentials.name} onChange={changeHandler} />
            </FormControl>
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
                Create Account
            </Button>
        </Container>
    )
}
