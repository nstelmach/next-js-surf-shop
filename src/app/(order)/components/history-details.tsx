import Link from "next/link"
import Typography from "@/src/components/typography/typography"
import HistoryContainer from "@/src/app/(order)/components/history-container"
import { Suspense } from "react"
import HistorySkeleton from "@/src/app/(order)/components/history-skeleton"

export default function HistoryDetails() {
  return (
    <>
      <Suspense fallback={<HistorySkeleton />}>
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
