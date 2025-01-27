"use client"
import { useRouter } from "next/navigation"
import { useMutation } from "@blitzjs/rpc"
import logout from "@/src/app/(auth)/mutations/logout"
import ButtonWithLoader from "@/src/components/button-with-loader/button-with-loader"

export function LogoutButton() {
  const router = useRouter()
  const [logoutMutation, { isLoading }] = useMutation(logout)

  const onLogoutHandler = async () => {
    await logoutMutation()
    router.refresh()
    router.push("/login")
  }

  return (
    <ButtonWithLoader
      className="min-w-52 md:min-w-64 xl:min-w-fit"
      onClick={onLogoutHandler}
      type="button"
      isLoading={isLoading}
      label="LOGOUT"
    />
  )
}
