import AccountContent from "@/src/app/my-account/components/account-content"
import { useAuthenticatedBlitzContext } from "@/src/app/blitz-server"
import Typography from "@/src/components/typography/typography"

export default async function MyAccountPage() {
  await useAuthenticatedBlitzContext({
    redirectTo: "/login",
  })

  return (
    <>
      <Typography as="h1" variant="2xlarge" weight="bold" className="m-4 text-center">
        YOUR ACCOUNT
      </Typography>
      <AccountContent />
    </>
  )
}
