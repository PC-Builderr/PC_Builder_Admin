import { ChevronDownIcon } from '@chakra-ui/icons'
import {
    Box,
    Button,
    Center,
    Container,
    Divider,
    Flex,
    Heading,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Spacer,
    Text
} from '@chakra-ui/react'
import React, { FunctionComponent, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context/Auth/AuthContext'
import { AuthContextInterface } from '../../../context/Auth/AuthContext.interface'
import { useLogout } from '../../../hooks/Auth/useLogout'

interface Props {}

export const Nav: FunctionComponent<Props> = props => {
    const { authState, logout } = useLogout()

    return (
        <Box w='full' bg='twitter.500'>
            <Container maxW='7xl' paddingBottom='1' paddingTop='1'>
                <Flex>
                    <Center>
                        <Heading
                            as={Link}
                            to=''
                            color='white'
                            fontWeight='bold'
                            fontSize='2xl'
                            paddingBottom='2'
                            paddingTop='2'
                        >
                            Admin
                        </Heading>
                    </Center>

                    <Spacer />
                    <Center>
                        {authState && (
                            <Flex>
                                <Text
                                    as={Link}
                                    to='/products'
                                    fontWeight='semibold'
                                    color='gray.50'
                                    p='2'
                                >
                                    Products
                                </Text>
                                <Text
                                    as={Link}
                                    to='/orders?tab=0'
                                    fontWeight='semibold'
                                    color='gray.50'
                                    p='2'
                                >
                                    Orders
                                </Text>
                                <Center>
                                    <Divider orientation='vertical' height='8' ml='3' mr='2' />
                                </Center>
                                <Menu>
                                    <MenuButton
                                        colorScheme='twitter'
                                        as={Button}
                                        rightIcon={<ChevronDownIcon />}
                                    >
                                        Actions
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem as={Link} to='/register'>
                                            Register
                                        </MenuItem>
                                        <MenuItem onClick={logout}>Logout</MenuItem>
                                    </MenuList>
                                </Menu>
                            </Flex>
                        )}
                    </Center>
                </Flex>
            </Container>
        </Box>
    )
}
