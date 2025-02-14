import ChangePasswordForm from "@/src/app/(auth)/components/change-password/change-password-form"
import Typography from "@/src/components/typography/typography"
import { useAuthenticatedBlitzContext } from "@/src/app/blitz-server"

export default async function PersonalInformationPage() {
  await useAuthenticatedBlitzContext({
    redirectTo: "/login",
  })

  return (
    <>
      <Typography as="h1" variant="2xlarge" weight="bold" className="m-4 text-center">
        YOUR PERSONAL INFORMATION
      </Typography>
      <ChangePasswordForm />
    </>
  )
}
