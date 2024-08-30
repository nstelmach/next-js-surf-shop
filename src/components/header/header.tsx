import Image from "next/image";
import Link from "next/link";

import cartImg from "@/assets/icons/cart.png";
import logoImg from "@/assets/icons/logo.jpg";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

export default function Header() {
  return (
    <header className="flex justify-center items-center">
      <Link href="/">
        <Image src={logoImg} alt="Surf Shop Logo" width={100} />
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className={navigationMenuTriggerStyle()}>
            <Link href="/bestsellers">
              <NavigationMenuLink>BESTSELLERS</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuItem className={navigationMenuTriggerStyle()}>
          <Link href="/tees">
            <NavigationMenuLink>TEES</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className={navigationMenuTriggerStyle()}>
          <Link href="/longsleeves">
            <NavigationMenuLink>LONGSLEEVES</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className={navigationMenuTriggerStyle()}>
          <Link href="/hoodies">
            <NavigationMenuLink>HOODIES</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className={navigationMenuTriggerStyle()}>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink>ABOUT</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className={navigationMenuTriggerStyle()}>
          <Link href="" legacyBehavior passHref>
            <NavigationMenuLink>SIGN IN</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenu>
      <Link href="">
        <Image src={cartImg} alt="Cart" width={36} />
      </Link>
    </header>
  );
}
