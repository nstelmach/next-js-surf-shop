import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/src/components/ui/table"
import HistoryTableRow from "@/src/app/(order)/components/history-table-row"
import Typography from "@/src/components/typography/typography"
import { Order } from "@prisma/client"

interface HistoryTableProps {
  orders: Order[]
}

export default function HistoryTable({ orders }: HistoryTableProps) {
  return (
    <>
      {orders && orders.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order No.</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Products</TableHead>
              <TableHead>Shipping</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead>Total Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <HistoryTableRow key={order.id} order={order} />
            ))}
          </TableBody>
        </Table>
      ) : (
        <Typography as="p" variant="base" className="m-2 text-center w-full">
          You have not placed any orders.
        </Typography>
      )}
    </>
  )
}
