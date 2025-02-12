import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/src/components/ui/navigation-menu"
import Link from "next/link"

interface HeaderItemProps {
  href: string
  name: string
}

export default function HeaderItem({ href, name }: HeaderItemProps) {
  return (
    <NavigationMenuItem className={navigationMenuTriggerStyle()}>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink>{name}</NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
}
