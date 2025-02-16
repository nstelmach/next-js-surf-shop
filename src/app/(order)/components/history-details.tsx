import Link from "next/link"
import Typography from "@/src/components/typography/typography"
import HistoryContainer from "@/src/app/(order)/components/history-container"

export default function HistoryDetails() {
  return (
    <>
      <HistoryContainer />
      <Link href="/my-account" className="hover:underline">
        <Typography as="p" variant="base" className="text-center">
          Back to your account
        </Typography>
      </Link>
    </>
  )
}
