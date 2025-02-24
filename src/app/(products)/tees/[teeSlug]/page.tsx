import { Suspense } from "react"
import TeeWrapper from "@/src/app/(products)/components/product-details/tee-wrapper"
import CardSkeleton from "@/src/app/(products)/components/product-details/card-skeleton"

export default function TeeDetailsPage() {
  return (
    <Suspense fallback={<CardSkeleton />}>
      <TeeWrapper />
    </Suspense>
  )
}
