"use client"
import Paragraph from "@/src/components/typohgraphy/paragraph"
import ChangePasswordForm from "@/src/app/(auth)/components/change-password/change-password-form"
import { useCurrentUser } from "@/src/app/users/hooks/useCurrentUser"

export default function PersonalInformationPage() {
  const user = useCurrentUser()

  return (
    <>
      <Paragraph className="text-3xl md:text-4xl xl:text-2xl font-bold m-4 text-center">
        YOUR PERSONAL INFORMATION
      </Paragraph>
      <ChangePasswordForm />
    </>
  )
}
