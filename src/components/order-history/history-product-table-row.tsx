import { TableCell, TableRow } from "@/src/components/ui/table"
import { OrderProduct } from "@prisma/client"
import Paragraph from "@/src/components/typohgraphy/paragraph"
import Flex from "@/src/components/typohgraphy/flex"
import Image from "next/image"

interface HistoryProductTableRowProps {
  product: OrderProduct
}

export default function HistoryProductTableRow({ product }: HistoryProductTableRowProps) {
  const name = product.product.name

  return (
    <TableRow>
      <TableCell>
        <Flex className="flex-row justify-start items-center gap-4 m-2">
          <Image src={product.product.images[0].src} alt={name} width={100} height={200} />
          <Paragraph>{name}</Paragraph>
        </Flex>
      </TableCell>
      <TableCell>{product.size}</TableCell>
      <TableCell>{product.quantity}</TableCell>
      <TableCell>{product.product.prices[0].price} €</TableCell>
    </TableRow>
  )
}
