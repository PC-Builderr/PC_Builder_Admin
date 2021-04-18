import { Center, Spinner } from '@chakra-ui/react'
import React, { FunctionComponent } from 'react'

interface Props {
    loading: boolean
}

export const TableLoader: FunctionComponent<Props> = props => {
    return (
        <>
            {props.loading ? (
                <Center mt='8' mb='6'>
                    <Spinner size='xl' />
                </Center>
            ) : null}
        </>
    )
}
