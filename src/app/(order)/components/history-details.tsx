import Link from "next/link"
import HistoryTable from "@/src/app/(order)/components/history-table"

export default function HistoryDetails() {
  return (
    <>
      <HistoryTable />
      <Link
        href="/my-account"
        className="hover:underline xl:text-base text-xl md:text-2xl text-center"
      >
        Back to your account
      </Link>
    </>
  )
}
