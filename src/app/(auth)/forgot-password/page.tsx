import ForgotPasswordContent from "@/src/app/(auth)/components/forgot-password/forgot-password-content"
import Typography from "@/src/components/typography/typography"

export default function ForgotPasswordPage() {
  return (
    <>
      <Typography as="h1" variant="2xlarge" weight="bold" className="m-4 text-center">
        FORGOT YOUR PASSWORD?
      </Typography>
      <ForgotPasswordContent />
    </>
  )
}
