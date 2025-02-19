import { Suspense } from "react"
import LongsleeveListWrapper from "@/src/app/(products)/components/product-details/longsleeve-list-wrapper"
import ListSkeleton from "@/src/components/skeletons/list-skeleton"

export default function LongSleevesPage() {
  return (
    <Suspense fallback={<ListSkeleton />}>
      <LongsleeveListWrapper />
    </Suspense>
  )
}
