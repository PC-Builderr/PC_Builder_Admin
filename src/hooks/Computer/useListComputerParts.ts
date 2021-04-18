import { useCallback, useState } from 'react'
import { Product } from '../../types/dto/product/Product'
import { COMPUTER_API_URL } from '../../constants'

interface ComputerParts {
    cpu: Product
    gpu: Product
    gpuQuantity: number
    mobo: Product
    ram: Product
    ramQuantity: number
    storages: [Product, number][]
    chassis: Product
    psu: Product
}

export const useListComputerParts = () => {
    const [data, setData] = useState<ComputerParts | null>(null)

    const listComputerParts = useCallback(async (id: number) => {
        const res = await fetch(`${COMPUTER_API_URL}/${id}`)

        if (!res.ok) {
            return
        }

        const { computer } = await res.json()

        setData({
            cpu: computer.cpu.product,
            chassis: computer.chassis.product,
            gpu: computer.gpu?.product,
            gpuQuantity: computer.gpuQuantity,
            ram: computer.ram.product,
            mobo: computer.motherboard.product,
            ramQuantity: computer.ramQuantity,
            psu: computer.psu.product,
            storages: computer.storages.map((s: any) => [s.storage.product, s.quantity])
        })
    }, [])

    return { data, listComputerParts }
}
