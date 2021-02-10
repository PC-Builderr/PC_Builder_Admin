import { Th, Thead, Tr } from '@chakra-ui/react'
import React, { FunctionComponent } from 'react'

interface Props {}

export const TableHead: FunctionComponent<Props> = props => {
    return (
        <Thead>
            <Tr>
                <Th textAlign='center'>ID</Th>
                <Th>Stripe Dashboard link</Th>
                <Th>Econt PDF Link</Th>
                <Th>Order reciept</Th>
                <Th>Status</Th>
                <Th textAlign='center'>Total</Th>
                <Th textAlign='center'>Actions</Th>
            </Tr>
        </Thead>
    )
}
