import { Container } from '@chakra-ui/react'
import React, { FunctionComponent } from 'react'
import { Nav } from './Nav'

interface Props {
    children: React.ReactElement
}

export const Layout: FunctionComponent<Props> = props => {
    return (
        <>
            <Nav />
            <Container maxW='7xl'>{props.children}</Container>
        </>
    )
}
