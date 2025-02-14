"use client"
import { NavigationMenu, NavigationMenuList } from "@/src/components/ui/navigation-menu"
import HeaderItem from "@/src/components/header/header-item"
import { useCurrentUser } from "@/src/app/user/hooks/use-current-user"

export default function HeaderNavigationMenu() {
  const user = useCurrentUser()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <HeaderItem href="/bestsellers" name="BESTSELLERS" />
        <HeaderItem href="/tees" name="TEES" />
        <HeaderItem href="/hoodies" name="HOODIES" />
        <HeaderItem href="/longsleeves" name="LONGSLEEVES" />
        <HeaderItem href="/about" name="ABOUT" />
        <HeaderItem href={user ? "/my-account" : "/login"} name={user ? "MY ACCOUNT" : "SIGN IN"} />
      </NavigationMenuList>
    </NavigationMenu>
  )
}
