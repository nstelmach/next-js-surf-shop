import { Suspense } from "react"
import HoodieListWrapper from "@/src/app/(products)/components/product-details/hoodie-list-wrapper"
import ListSkeleton from "@/src/components/skeletons/list-skeleton"

export default function HoodiesPage() {
  return (
    <Suspense fallback={<ListSkeleton />}>
      <HoodieListWrapper />
    </Suspense>
  )
}
