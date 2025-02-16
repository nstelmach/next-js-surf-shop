"use client"
import { useRouter } from "next/navigation"
import { useMutation } from "@blitzjs/rpc"
import logout from "@/src/app/(auth)/mutations/logout"
import ButtonWithLoader from "@/src/components/button-with-loader/button-with-loader"
import { FORM_ERROR, UNEXPECTED_ERROR } from "@/src/lib/constants"

export function LogoutButton() {
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

  return (
    <ButtonWithLoader
      className="md:min-w-64 xl:min-w-fit"
      onClick={onLogoutHandler}
      type="button"
      isLoading={isLoading}
      label="LOGOUT"
    />
  )
}
