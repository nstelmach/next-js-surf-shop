import { Suspense } from "react"
import HoodieListWrapper from "@/src/app/(products)/components/product-details/hoodie-list-wrapper"
import ListSkeleton from "@/src/components/skeletons/list-skeleton"
import Typography from "@/src/components/typography/typography"

export default function HoodiesPage() {
  return (
    <>
      <Typography as="h1" variant="2xlarge" weight="bold" className="m-4">
        HOODIES
      </Typography>
      <Suspense fallback={<ListSkeleton />}>
        <HoodieListWrapper />
      </Suspense>
    </>
  )
}
