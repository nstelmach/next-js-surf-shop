import { Suspense } from "react"
import BestsellerListWrapper from "@/src/app/(products)/components/product-details/bestseller-list-wrapper"
import ListSkeleton from "@/src/components/skeletons/list-skeleton"

export default function BestsellersPage() {
  return (
    <Suspense fallback={<ListSkeleton />}>
      <BestsellerListWrapper />
    </Suspense>
  )
}
