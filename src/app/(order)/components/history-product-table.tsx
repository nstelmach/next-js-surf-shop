import { Table, TableBody } from "@/src/components/ui/table"
import HistoryProductTableRow from "@/src/app/(order)/components/history-product-table-row"
import { OrderProductDetails } from "@/src/lib/types"

interface HistoryProductTableProps {
  products: OrderProductDetails[]
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
