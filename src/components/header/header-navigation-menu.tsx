import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

export default function HeaderNavigationMenu() {
    return <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                <Link href="/bestsellers" legacyBehavior passHref>
                    <NavigationMenuLink>BESTSELLERS</NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                <Link href="/tees" legacyBehavior passHref>
                    <NavigationMenuLink>TEES</NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                <Link href="/longsleeves" legacyBehavior passHref>
                    <NavigationMenuLink>LONGSLEEVES</NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                <Link href="/hoodies" legacyBehavior passHref>
                    <NavigationMenuLink>HOODIES</NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink>ABOUT</NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                <Link href="/login" legacyBehavior passHref>
                    <NavigationMenuLink>SIGN IN</NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
}
