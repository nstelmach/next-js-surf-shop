"use client"
import Link from "next/link"
import { useCurrentUser } from "@/src/hooks/use-current-user"
import { NavigationMenuLink } from "@/src/components/ui/navigation-menu"

export default function HeaderLink() {
  const user = useCurrentUser()

  return (
    <Link href={user ? "/my-account" : "/login"} legacyBehavior passHref>
      <NavigationMenuLink>{user ? "MY ACCOUNT" : "SIGN IN"}</NavigationMenuLink>
    </Link>
  )
}
