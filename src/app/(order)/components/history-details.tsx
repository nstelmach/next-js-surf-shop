import Link from "next/link"
import HistoryTable from "@/src/app/(order)/components/history-table"
import Typography from "@/src/components/typography/typography"

export default function HistoryDetails() {
  return (
    <>
      <HistoryTable />
      <Link href="/my-account" className="hover:underline">
        <Typography as="p" variant="base" className="text-center">
          Back to your account
        </Typography>
      </Link>
    </>
  )
}
