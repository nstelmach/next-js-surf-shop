import { Suspense } from "react"
import HoodieWrapper from "@/src/app/(products)/components/product-details/hoodie-wrapper"
import CardSkeleton from "@/src/components/skeletons/card-skeleton"

export default function HoodieDetailsPage() {
  return (
    <>
      <Suspense fallback={<CardSkeleton />}>
        <HoodieWrapper />
      </Suspense>
      <CardSkeleton />
    </>
  )
}
