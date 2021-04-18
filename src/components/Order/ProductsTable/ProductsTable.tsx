import {
    Button,
    Divider,
    Heading,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    useDisclosure
} from '@chakra-ui/react'
import React, { FunctionComponent } from 'react'
import { useListComputerParts } from '../../../hooks/Computer/useListComputerParts'
import { Order } from '../../../types/dto/order/Order'
import { OrderProduct } from '../../../types/dto/order/OrderProduct'

interface Props {
    order: Order
}

export const ProductsTable: FunctionComponent<Props> = props => {
    const { order } = props
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { data, listComputerParts } = useListComputerParts()

    return (
        <>
            <Heading mt='8' size='md'>
                Products
            </Heading>
            <Divider />
            <Table variant='unstyled' w='4xl' size='sm' mt='1'>
                <Thead>
                    <Tr>
                        <Th pl='0'>ID</Th>
                        <Th pl='0'>Name</Th>
                        <Th textAlign='center'>Type</Th>
                        <Th textAlign='center'>Quantity</Th>
                        <Th textAlign='center'>Price (single)</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {order.orderProducts?.map((orderProduct: OrderProduct) => (
                        <Tr key={orderProduct.productId}>
                            <Td pl='0'>{orderProduct.productId}</Td>
                            <Td pl='0'>{orderProduct.product?.name}</Td>
                            <Td
                                textAlign='center'
                                fontWeight='bold'
                                fontSize='0.8rem'
                                textTransform='uppercase'
                            >
                                {orderProduct.product?.type}
                            </Td>
                            <Td textAlign='center'>{orderProduct.quantity}</Td>
                            <Td textAlign='center'>{orderProduct.product?.price}</Td>
                            {orderProduct.product?.type === 'computer' ? (
                                <Button
                                    onClick={() => {
                                        onOpen()
                                        listComputerParts(orderProduct.productId)
                                    }}
                                    m='0.2rem'
                                    colorScheme='twitter'
                                >
                                    List Parts
                                </Button>
                            ) : null}
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            <Modal size='4xl' isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent width='80%'>
                    <ModalHeader>Computer Parts</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Table variant='unstyled' w='3xl' size='sm' mt='1'>
                            <Thead>
                                <Tr>
                                    <Th pl='0'>ID</Th>
                                    <Th pl='0'>Name</Th>
                                    <Th textAlign='center'>Type</Th>
                                    <Th textAlign='center'>Quantity</Th>
                                    <Th textAlign='center'>Price (single)</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td pl='0'>{data?.cpu.id}</Td>
                                    <Td pl='0'>{data?.cpu.name}</Td>
                                    <Td
                                        textAlign='center'
                                        fontWeight='bold'
                                        fontSize='0.8rem'
                                        textTransform='uppercase'
                                    >
                                        {data?.cpu.type}
                                    </Td>
                                    <Td textAlign='center'>1</Td>
                                    <Td textAlign='center'>{data?.cpu.price}</Td>
                                </Tr>
                                {(data?.gpuQuantity ?? 0) > 0 ? (
                                    <Tr>
                                        <Td pl='0'>{data?.gpu.id}</Td>
                                        <Td pl='0'>{data?.gpu.name}</Td>
                                        <Td
                                            textAlign='center'
                                            fontWeight='bold'
                                            fontSize='0.8rem'
                                            textTransform='uppercase'
                                        >
                                            {data?.gpu.type}
                                        </Td>
                                        <Td textAlign='center'>{data?.gpuQuantity}</Td>
                                        <Td textAlign='center'>{data?.gpu.price}</Td>
                                    </Tr>
                                ) : null}
                                <Tr>
                                    <Td pl='0'>{data?.mobo.id}</Td>
                                    <Td pl='0'>{data?.mobo.name}</Td>
                                    <Td
                                        textAlign='center'
                                        fontWeight='bold'
                                        fontSize='0.8rem'
                                        textTransform='uppercase'
                                    >
                                        {data?.mobo.type}
                                    </Td>
                                    <Td textAlign='center'>1</Td>
                                    <Td textAlign='center'>{data?.mobo.price}</Td>
                                </Tr>
                                <Tr>
                                    <Td pl='0'>{data?.ram.id}</Td>
                                    <Td pl='0'>{data?.ram.name}</Td>
                                    <Td
                                        textAlign='center'
                                        fontWeight='bold'
                                        fontSize='0.8rem'
                                        textTransform='uppercase'
                                    >
                                        {data?.ram.type}
                                    </Td>
                                    <Td textAlign='center'>{data?.ramQuantity}</Td>
                                    <Td textAlign='center'>{data?.ram.price}</Td>
                                </Tr>
                                <Tr>
                                    <Td pl='0'>{data?.chassis.id}</Td>
                                    <Td pl='0'>{data?.chassis.name}</Td>
                                    <Td
                                        textAlign='center'
                                        fontWeight='bold'
                                        fontSize='0.8rem'
                                        textTransform='uppercase'
                                    >
                                        {data?.chassis.type}
                                    </Td>
                                    <Td textAlign='center'>1</Td>
                                    <Td textAlign='center'>{data?.chassis.price}</Td>
                                </Tr>
                                {data?.storages.map(([storage, quantity]) => (
                                    <Tr>
                                        <Td pl='0'>{storage.id}</Td>
                                        <Td pl='0'>{storage.name}</Td>
                                        <Td
                                            textAlign='center'
                                            fontWeight='bold'
                                            fontSize='0.8rem'
                                            textTransform='uppercase'
                                        >
                                            {storage.type}
                                        </Td>
                                        <Td textAlign='center'>{quantity}</Td>
                                        <Td textAlign='center'>{storage.price}</Td>
                                    </Tr>
                                ))}

                                <Tr>
                                    <Td pl='0'>{data?.psu.id}</Td>
                                    <Td pl='0'>{data?.psu.name}</Td>
                                    <Td
                                        textAlign='center'
                                        fontWeight='bold'
                                        fontSize='0.8rem'
                                        textTransform='uppercase'
                                    >
                                        {data?.psu.type}
                                    </Td>
                                    <Td textAlign='center'>1</Td>
                                    <Td textAlign='center'>{data?.psu.price}</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
