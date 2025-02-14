"use client"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/src/components/ui/table"
import HistoryTableRow from "@/src/app/(order)/components/history-table-row"
import Loading from "@/src/app/loading"
import { Suspense } from "react"
import { useQuery } from "@blitzjs/rpc"
import getOrders from "@/src/app/(order)/queries/get-orders"
import Typography from "@/src/components/typography/typography"

export default function HistoryTable() {
  const [orders] = useQuery(getOrders)

  return (
    <Suspense fallback={<Loading />}>
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
    </Suspense>
  )
}
