"use client"
import { useQuery } from "@blitzjs/rpc"
import { Suspense } from "react"
import { Skeleton } from "@/src/components/ui/skeleton"
import getOrders from "@/src/app/(order)/queries/get-orders"
import HistoryTable from "@/src/app/(order)/components/history-table"
import HistoryCard from "@/src/app/(order)/components/history-card"

export default function HistoryContainer() {
  const [orders] = useQuery(getOrders)

  return (
    <Suspense fallback={<Skeleton className="h-[300px] w-[1300px]" />}>
      <HistoryTable orders={orders} />
      <HistoryCard orders={orders} />
    </Suspense>
  )
}
