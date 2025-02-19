"use client"
import { useQuery } from "@blitzjs/rpc"
import getOrders from "@/src/app/(order)/queries/get-orders"
import HistoryTable from "@/src/app/(order)/components/history-table"
import HistoryCard from "@/src/app/(order)/components/history-card"

export default function HistoryContainer() {
  const [orders] = useQuery(getOrders)

  return (
    <>
      <HistoryTable orders={orders} />
      <HistoryCard orders={orders} />
    </>
  )
}
