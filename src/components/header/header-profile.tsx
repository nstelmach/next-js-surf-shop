"use client"
import { useCurrentUser } from "@/src/app/user/hooks/use-current-user"
import {
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export default function HeaderProfile() {
  const user = useCurrentUser()

  return (
    <>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <Link href={user ? "/profile" : "/login"}>
        <DropdownMenuItem>{user ? "Profile" : "Login"}</DropdownMenuItem>
      </Link>
      {user && (
        <Link href={"/order-history"}>
          <DropdownMenuItem>Order History</DropdownMenuItem>
        </Link>
      )}
    </>
  )
}
