import ResetPasswordForm from "@/src/app/(auth)/components/reset-password/reset-password-form"
import Typography from "@/src/components/typography/typography"

export default function ResetPasswordPage() {
  return (
    <>
      <Typography as="h1" variant="2xlarge" weight="bold" className="m-4 text-center">
        RESET PASSWORD
      </Typography>
      <ResetPasswordForm />
    </>
  )
}
