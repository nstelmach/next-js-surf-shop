import Paragraph from "@/src/components/typohgraphy/paragraph"
import { Input } from "@/src/components/ui/input"
import ButtonWithToast from "@/src/components/toast/button-with-toast"
import Link from "next/link"
import Flex from "@/src/components/typohgraphy/flex"

export default function ChangePasswordContent() {
  return (
    <Flex className="flex-col justify-center items-center">
      <Paragraph className="m-2 text-center xl:text-base text-xl md:text-2xl">
        Please enter the email address you used to register. You will receive a temporary link to
        reset your password.
      </Paragraph>
      <Flex className="max-w-sm flex-col xl:flex-row justify-center items-center min-w-72 md:min-w-96 xl:min-w-fit xl:space-x-2 m-2 gap-2">
        <Input type="email" id="email" placeholder="Email adress" />
        <ButtonWithToast
          type="submit"
          description="Reset link has been successfully sent to your email address!"
          label="SEND RESET LINK"
        />
      </Flex>
      <Link href="/login" className="hover:underline xl:text-base text-xl md:text-2xl">
        Back to login
      </Link>
    </Flex>
  )
}
