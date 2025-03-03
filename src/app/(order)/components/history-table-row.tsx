"use client"
import { TableCell, TableRow } from "@/src/components/ui/table"
import HistoryProductTable from "@/src/app/(order)/components/history-product-table"
import { getLink } from "@/src/lib/utils"
import { useRouter } from "next/navigation"
import { OrderDetails } from "@/src/lib/types"

interface HistoryTableRowProps {
  order: OrderDetails
}

export default function HistoryTableRow({ order }: HistoryTableRowProps) {
  const router = useRouter()
  const href = getLink("order", order.id)

  return (
    <TableRow className="hover:bg-muted/50" onClick={() => router.push(href)}>
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
