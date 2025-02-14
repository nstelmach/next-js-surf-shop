import { TableCell, TableRow } from "@/src/components/ui/table"
import { OrderProduct } from "@prisma/client"
import Image from "next/image"
import Typography from "@/src/components/typography/typography"

interface HistoryProductTableRowProps {
  product: OrderProduct
}

export default function HistoryProductTableRow({ product }: HistoryProductTableRowProps) {
  const orderProduct = product.product
  const name = orderProduct.name

  return (
    <TableRow>
      <TableCell>
        <div className="flex flex-row justify-start items-center gap-4 m-2">
          <Image src={orderProduct.images[0].src} alt={name} width={100} height={200} />
          <Typography as="p">{name}</Typography>
        </div>
      </TableCell>
      <TableCell>{product.size}</TableCell>
      <TableCell>{product.quantity}</TableCell>
      <TableCell>{orderProduct.prices[0].price} €</TableCell>
    </TableRow>
  )
}
