import { Order } from "@prisma/client"
import { TableCell, TableRow } from "@/src/components/ui/table"
import HistoryProductTable from "@/src/components/order-history/history-product-table"

interface HistoryTableRowProps {
  order: Order
}

export default function HistoryTableRow({ order }: HistoryTableRowProps) {
  return (
    <TableRow>
      <TableCell>{order.id}</TableCell>
      <TableCell>{order.createdAt.toLocaleDateString()}</TableCell>
      <TableCell>
        <HistoryProductTable products={order.products} />
      </TableCell>
      <TableCell>{order.shipping.label}</TableCell>
      <TableCell>{order.payment.label}</TableCell>
      <TableCell>{order.price} €</TableCell>
    </TableRow>
  )
}
