import ResetPasswordForm from "@/src/app/(auth)/components/reset-password/reset-password-form"
import Paragraph from "@/src/components/typography/paragraph"

export default function ResetPasswordPage() {
  return (
    <>
      <Paragraph className="text-3xl md:text-4xl xl:text-2xl font-bold m-4 text-center">
        RESET PASSWORD
      </Paragraph>
      <ResetPasswordForm />
    </>
  )
}
