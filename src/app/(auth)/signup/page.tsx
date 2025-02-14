import SignupContent from "@/src/app/(auth)/components/signup/signup-content"
import Typography from "@/src/components/typography/typography"

export default function SignUpPage() {
  return (
    <>
      <Typography as="h1" variant="2xlarge" weight="bold" className="m-4 text-center">
        SIGN UP
      </Typography>
      <SignupContent />
    </>
  )
}
