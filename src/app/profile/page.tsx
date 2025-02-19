import ChangePasswordForm from "@/src/app/(auth)/components/change-password/change-password-form"
import Typography from "@/src/components/typography/typography"
import { useAuthenticatedBlitzContext } from "@/src/app/blitz-server"
import { Suspense } from "react"
import InfoSkeleton from "@/src/components/skeletons/info-skeleton"
import PersonalInformation from "@/src/app/(auth)/components/change-password/personal-information"
import { LogoutButton } from "@/src/app/(auth)/components/logout/logout-button"

export default async function ProfilePage() {
  await useAuthenticatedBlitzContext({
    redirectTo: "/login",
  })

  return (
    <>
      <Typography as="h1" variant="2xlarge" weight="bold" className="m-4 text-center">
        YOUR PROFILE
      </Typography>
      <div className="flex flex-col gap-4">
        <Suspense fallback={<InfoSkeleton />}>
          <PersonalInformation />
        </Suspense>
        <ChangePasswordForm />
        <LogoutButton type="button" />
      </div>
    </>
  )
}
