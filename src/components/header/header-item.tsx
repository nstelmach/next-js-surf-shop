import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/src/components/ui/navigation-menu"
import Link from "next/link"
import { Route } from "next"

interface HeaderItemProps<T extends string> {
  href: Route<T> | URL
  name: string
}

export default function HeaderItem({ href, name }: HeaderItemProps<string>) {
  return (
    <NavigationMenuItem className={navigationMenuTriggerStyle()}>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink>{name}</NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
}
