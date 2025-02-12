import Link from "next/link"
import ForgotPasswordForm from "@/src/app/(auth)/components/forgot-password/forgot-password-form"

export default function ForgotPasswordContent() {
  return (
    <div className="flex flex-col justify-center items-center">
      <ForgotPasswordForm />
      <Link href="/login" className="hover:underline xl:text-base text-xl md:text-2xl m-8">
        Back to login
      </Link>
    </div>
  )
}
