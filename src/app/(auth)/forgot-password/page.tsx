import Paragraph from "@/src/components/typohgraphy/paragraph"
import ForgotPasswordContent from "@/src/app/(auth)/components/forgot-password/forgot-password-content"

export default function ForgotPasswordPage() {
  return (
    <>
      <Paragraph className="text-center text-3xl md:text-4xl xl:text-2xl font-bold m-4">
        FORGOT YOUR PASSWORD?
      </Paragraph>
      <ForgotPasswordContent />
    </>
  )
}
