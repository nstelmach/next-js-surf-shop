import Paragraph from "@/src/components/typography/paragraph"
import AccountContent from "@/src/app/my-account/components/account-content"
import { useAuthenticatedBlitzContext } from "@/src/app/blitz-server"

export default async function MyAccountPage() {
  await useAuthenticatedBlitzContext({
    redirectTo: "/login",
  })

  return (
    <>
      <Paragraph className="text-center text-3xl md:text-4xl xl:text-2xl font-bold m-4">
        YOUR ACCOUNT
      </Paragraph>
      <AccountContent />
    </>
  )
}
