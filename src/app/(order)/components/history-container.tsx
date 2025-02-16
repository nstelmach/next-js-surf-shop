"use client"
import { useQuery } from "@blitzjs/rpc"
import { Suspense } from "react"
import getOrders from "@/src/app/(order)/queries/get-orders"
import HistoryTable from "@/src/app/(order)/components/history-table"
import HistoryCard from "@/src/app/(order)/components/history-card"
import Loading from "@/src/app/loading"

export default function HistoryContainer() {
  const [orders] = useQuery(getOrders)

  return (
    <Suspense fallback={<Loading />}>
      <HistoryTable orders={orders} />
      <HistoryCard orders={orders} />
    </Suspense>
  )
}
