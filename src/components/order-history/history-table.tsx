"use client"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/src/components/ui/table"
import Paragraph from "@/src/components/typohgraphy/paragraph"
import HistoryTableRow from "@/src/components/order-history/history-table-row"
import Loading from "@/src/app/loading"
import { Suspense } from "react"
import { useQuery } from "@blitzjs/rpc"
import getOrders from "@/src/queries/get-orders"

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
        <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center w-full">
          You have not placed any orders.
        </Paragraph>
      )}
    </Suspense>
  )
}
