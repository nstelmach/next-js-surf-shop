import { Suspense } from "react"
import BestsellerListWrapper from "@/src/app/(products)/components/product-details/bestseller-list-wrapper"
import ListSkeleton from "@/src/app/(products)/components/product-list/list-skeleton"
import Typography from "@/src/components/typography/typography"

export default function BestsellersPage() {
  return (
    <>
      <Typography as="h1" variant="2xlarge" weight="bold" className="m-4">
        BESTSELLERS
      </Typography>
      <Suspense fallback={<ListSkeleton />}>
        <BestsellerListWrapper />
      </Suspense>
    </>
  )
}
