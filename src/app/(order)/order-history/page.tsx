import HistoryDetails from "@/src/app/(order)/components/history-details"
import Typography from "@/src/components/typography/typography"

export default function OrderHistoryPage() {
  return (
    <>
      <Typography as="h1" variant="2xlarge" weight="bold" className="m-4 text-center">
        ORDER HISTORY
      </Typography>
      <HistoryDetails />
    </>
  )
}
