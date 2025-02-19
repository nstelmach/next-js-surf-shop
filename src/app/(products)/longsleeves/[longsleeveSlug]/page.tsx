import { Suspense } from "react"
import LongsleeveWrapper from "@/src/app/(products)/components/product-details/longsleeve-wrapper"
import CardSkeleton from "@/src/components/skeletons/card-skeleton"

export default function LongsleeveDetailsPage() {
  return (
    <Suspense fallback={<CardSkeleton />}>
      <LongsleeveWrapper />
    </Suspense>
  )
}
