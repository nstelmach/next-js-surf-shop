import { Order } from "@prisma/client"
import { TableCell, TableRow } from "@/src/components/ui/table"
import HistoryProductTable from "@/src/app/(order)/components/history-product-table"

interface HistoryTableRowProps {
  order: Order
}

export default function HistoryTableRow({ order }: HistoryTableRowProps) {
  return (
    <TableRow>
      <TableCell>{order.id}</TableCell>
      <TableCell>{order.createdAt.toLocaleDateString()}</TableCell>
      <TableCell>{order.shipping.label}</TableCell>
      <TableCell>{order.payment.label}</TableCell>
      <TableCell>{order.price} €</TableCell>
      <TableCell>
        <HistoryProductTable products={order.products} />
      </TableCell>
    </TableRow>
  )
}
