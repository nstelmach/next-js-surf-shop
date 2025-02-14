import Link from "next/link"
import ButtonWithLoader from "@/src/components/button-with-loader/button-with-loader"
import Typography from "@/src/components/typography/typography"

interface LoginLinksProps {
  isLoading: boolean
}

export default function LoginLinks({ isLoading }: LoginLinksProps) {
  return (
    <>
      <Link href="/forgot-password" className="hover:underline">
        <Typography as="p" variant="base" className="my-4 text-center xl:text-left">
          Forgot your password?
        </Typography>
      </Link>
      <ButtonWithLoader isLoading={isLoading} type="submit" label="SIGN IN" />
      <div className="flex flex-row justify-center items-center">
        <Typography as="p" variant="base" className="text-center">
          No account?{" "}
          <Link href="/signup" className="hover:underline">
            Create one here
          </Link>
        </Typography>
      </div>
    </>
  )
}
