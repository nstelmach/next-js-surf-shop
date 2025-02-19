import { Table, TableBody } from "@/src/components/ui/table"
import { OrderProduct } from "@prisma/client"
import HistoryProductTableRow from "@/src/app/(order)/components/history-product-table-row"

interface HistoryProductTableProps {
  products: OrderProduct[]
}

export default function HistoryProductTable({ products }: HistoryProductTableProps) {
  return (
    <Table>
      <TableBody>
        {products.map((product) => (
          <HistoryProductTableRow key={product.id} product={product} />
        ))}
      </TableBody>
    </Table>
  )
}
