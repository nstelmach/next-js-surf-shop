import { Suspense } from "react"
import TeeListWrapper from "@/src/app/(products)/components/product-details/tee-list-wrapper"
import ListSkeleton from "@/src/components/skeletons/list-skeleton"

export default function TeesPage() {
  return (
    <Suspense fallback={<ListSkeleton />}>
      <TeeListWrapper />
    </Suspense>
  )
}
