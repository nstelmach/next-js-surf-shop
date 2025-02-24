import { Suspense } from "react"
import LongsleeveListWrapper from "@/src/app/(products)/components/product-details/longsleeve-list-wrapper"
import ListSkeleton from "@/src/app/(products)/components/product-list/list-skeleton"
import Typography from "@/src/components/typography/typography"

export default function LongSleevesPage() {
  return (
    <>
      <Typography as="h1" variant="2xlarge" weight="bold" className="m-4">
        LONGSLEEVES
      </Typography>
      <Suspense fallback={<ListSkeleton />}>
        <LongsleeveListWrapper />
      </Suspense>
    </>
  )
}
