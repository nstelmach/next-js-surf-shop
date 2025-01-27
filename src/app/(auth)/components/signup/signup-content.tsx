import Paragraph from "@/src/components/typohgraphy/paragraph"
import Link from "next/link"
import SignupForm from "@/src/app/(auth)/components/signup/signup-form"

export default function SignupContent() {
  return (
    <>
      <Paragraph className="xl:text-base text-xl md:text-2xl m-4 text-center xl:text-left">
        Already have an account?{" "}
        <Link href="/login" className="hover:underline">
          Log in instead!
        </Link>
      </Paragraph>
      <SignupForm />
    </>
  )
}
