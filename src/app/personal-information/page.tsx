import Paragraph from "@/src/components/typography/paragraph"
import ChangePasswordForm from "@/src/app/(auth)/components/change-password/change-password-form"

export default function PersonalInformationPage() {
  return (
    <>
      <Paragraph className="text-3xl md:text-4xl xl:text-2xl font-bold m-4 text-center">
        YOUR PERSONAL INFORMATION
      </Paragraph>
      <ChangePasswordForm />
    </>
  )
}
