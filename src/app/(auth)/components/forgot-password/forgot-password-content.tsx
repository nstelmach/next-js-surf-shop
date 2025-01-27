import Link from "next/link"
import Flex from "@/src/components/typohgraphy/flex"
import ForgotPasswordForm from "@/src/app/(auth)/components/forgot-password/forgot-password-form"

export default function ForgotPasswordContent() {
  return (
    <Flex className="flex-col justify-center items-center">
      <ForgotPasswordForm />
      <Link href="/login" className="hover:underline xl:text-base text-xl md:text-2xl m-8">
        Back to login
      </Link>
    </Flex>
  )
}
