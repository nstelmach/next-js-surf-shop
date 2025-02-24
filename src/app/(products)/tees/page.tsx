import { Suspense } from "react"
import TeeListWrapper from "@/src/app/(products)/components/product-details/tee-list-wrapper"
import ListSkeleton from "@/src/app/(products)/components/product-list/list-skeleton"
import Typography from "@/src/components/typography/typography"

export default function TeesPage() {
  return (
    <>
      <Typography as="h1" variant="2xlarge" weight="bold" className="m-4">
        TEES
      </Typography>
      <Suspense fallback={<ListSkeleton />}>
        <TeeListWrapper />
      </Suspense>
    </>
  )
}
