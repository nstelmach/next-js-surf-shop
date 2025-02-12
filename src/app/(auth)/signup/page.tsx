import Paragraph from "@/src/components/typography/paragraph"
import SignupContent from "@/src/app/(auth)/components/signup/signup-content"

export default function SignUpPage() {
  return (
    <>
      <Paragraph className="text-3xl md:text-4xl xl:text-2xl font-bold m-4 text-center">
        SIGN UP
      </Paragraph>
      <SignupContent />
    </>
  )
}
