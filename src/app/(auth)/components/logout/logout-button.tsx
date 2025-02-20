"use client"
import { useRouter } from "next/navigation"
import { useMutation } from "@blitzjs/rpc"
import logout from "@/src/app/(auth)/mutations/logout"
import { FORM_ERROR, UNEXPECTED_ERROR } from "@/src/lib/constants"
import { Loader2 } from "lucide-react"

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
    <div onClick={onLogoutHandler} className="flex justify-center items-center">
      {isLoading ? <Loader2 className="animate-spin" /> : "Logout"}
    </div>
  )
}
