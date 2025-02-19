"use client"
import { useCurrentUser } from "@/src/app/user/hooks/use-current-user"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { LogoutButton } from "@/src/app/(auth)/components/logout/logout-button"

export default function HeaderProfile() {
  const user = useCurrentUser()

  return (
    <>
      <Link href={user ? "/profile" : "/login"}>
        <DropdownMenuItem>{user ? "Profile" : "Login"}</DropdownMenuItem>
      </Link>
      {user && (
        <Link href={"/order-history"}>
          <DropdownMenuItem>Order History</DropdownMenuItem>
        </Link>
      )}
      {user && (
        <DropdownMenuItem>
          <LogoutButton />
        </DropdownMenuItem>
      )}
    </>
  )
}
