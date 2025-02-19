"use client"
import { NavigationMenu, NavigationMenuList } from "@/src/components/ui/navigation-menu"
import HeaderItem from "@/src/components/header/header-item"

export default function HeaderNavigationMenu() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        <HeaderItem href="/bestsellers" name="BESTSELLERS" />
        <HeaderItem href="/tees" name="TEES" />
        <HeaderItem href="/hoodies" name="HOODIES" />
        <HeaderItem href="/longsleeves" name="LONGSLEEVES" />
      </NavigationMenuList>
    </NavigationMenu>
  )
}
