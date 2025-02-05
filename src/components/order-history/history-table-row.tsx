import { Order } from "@prisma/client"
import { TableCell, TableRow } from "@/src/components/ui/table"
import HistoryProductTable from "@/src/components/order-history/history-product-table"

interface HistoryTableRowProps {
  order: Order
}

export default function HistoryTableRow({ order }: HistoryTableRowProps) {
  console.log(order)

  return (
    <TableRow>
      <TableCell>{order.id}</TableCell>
      <TableCell>{order.createdAt.toLocaleDateString()}</TableCell>
      <TableCell>
        <HistoryProductTable products={order.products} />
        {/*<Flex className="flex-row justify-start items-center gap-4 m-2">*/}
        {/*  <Link href={`/${category}/${productId}`}>*/}
        {/*    <Image src={cartProduct.product.images[0].src} alt={name} width={100} height={200} />*/}
        {/*  </Link>*/}
        {/*  <Link href={`/${category}/${productId}`}>*/}
        {/*    <Paragraph>{name}</Paragraph>*/}
        {/*  </Link>*/}
        {/*</Flex>*/}
      </TableCell>
      <TableCell>{order.shipping.label}</TableCell>
      <TableCell>{order.payment.label}</TableCell>
      <TableCell>{order.price} €</TableCell>
    </TableRow>
  )
}
