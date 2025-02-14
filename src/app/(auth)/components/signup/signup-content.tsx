import Link from "next/link"
import SignupForm from "@/src/app/(auth)/components/signup/signup-form"
import Typography from "@/src/components/typography/typography"

export default function SignupContent() {
  return (
    <>
      <Typography as="p" variant="base" className="m-4 text-center xl:text-left">
        Already have an account?{" "}
        <Link href="/login" className="hover:underline">
          Log in instead!
        </Link>
      </Typography>
      <SignupForm />
    </>
  )
}
