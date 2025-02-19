import Link from "next/link"
import Typography from "@/src/components/typography/typography"
import HistoryContainer from "@/src/app/(order)/components/history-container"
import CardSkeleton from "@/src/components/skeletons/card-skeleton"
import { Suspense } from "react"

export default function HistoryDetails() {
  return (
    <>
      <Suspense fallback={<CardSkeleton />}>
        <HistoryContainer />
      </Suspense>
      <Link href="/profile" className="hover:underline">
        <Typography as="p" variant="base" className="text-center m-2">
          Back to your account
        </Typography>
      </Link>
    </>
  )
}
