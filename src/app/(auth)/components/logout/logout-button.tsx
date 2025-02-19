"use client"
import { useRouter } from "next/navigation"
import { useMutation } from "@blitzjs/rpc"
import logout from "@/src/app/(auth)/mutations/logout"
import ButtonWithLoader from "@/src/components/button-with-loader/button-with-loader"
import { FORM_ERROR, UNEXPECTED_ERROR } from "@/src/lib/constants"
import { Loader2 } from "lucide-react"

interface LogoutButtonProps {
  type?: "button"
}

export function LogoutButton({ type }: LogoutButtonProps) {
  const router = useRouter()
  const [logoutMutation, { isLoading }] = useMutation(logout)

  const onLogoutHandler = async () => {
    try {
      await logoutMutation()
      router.refresh()
      router.push("/login")
    } catch (error: any) {
      return {
        [FORM_ERROR]: UNEXPECTED_ERROR,
      }
    }
  }

  return type === "button" ? (
    <ButtonWithLoader
      className="md:max-w-sm xl:max-w-md"
      onClick={onLogoutHandler}
      type="button"
      isLoading={isLoading}
      label="LOGOUT"
      variant="secondary"
    />
  ) : (
    <div onClick={onLogoutHandler}>
      {isLoading ? <Loader2 className="animate-spin" /> : "Logout"}
    </div>
  )
}
