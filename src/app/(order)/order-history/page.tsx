import HistoryDetails from "@/src/app/(order)/components/history-details"
import Typography from "@/src/components/typography/typography"
import { useAuthenticatedBlitzContext } from "@/src/app/blitz-server"

export default async function OrderHistoryPage() {
  await useAuthenticatedBlitzContext({
    redirectTo: "/login",
  })

  return (
    <>
      <Typography as="h1" variant="2xlarge" weight="bold" className="m-4 text-center">
        ORDER HISTORY
      </Typography>
      <HistoryDetails />
    </>
  )
}
