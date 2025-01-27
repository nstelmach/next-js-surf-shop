import Link from "next/link"
import Paragraph from "@/src/components/typohgraphy/paragraph"
import Flex from "@/src/components/typohgraphy/flex"
import ButtonWithLoader from "@/src/components/button-with-loader/button-with-loader"

interface LoginLinksProps {
  isLoading: boolean
}

export default function LoginLinks({ isLoading }: LoginLinksProps) {
  return (
    <>
      <Link href="/forgot-password" className="hover:underline">
        <Paragraph className="my-4 hover:underline xl:text-base text-xl md:text-2xl text-center xl:text-left">
          Forgot your password?
        </Paragraph>
      </Link>
      <ButtonWithLoader isLoading={isLoading} type="submit" label="SIGN IN" />
      <Flex className="flex-row justify-center items-center">
        <Paragraph className="xl:text-base text-xl md:text-2xl text-center">
          No account?{" "}
          <Link href="/signup" className="hover:underline">
            Create one here
          </Link>
        </Paragraph>
      </Flex>
    </>
  )
}
