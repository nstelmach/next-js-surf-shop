import Image from "next/image";
import Link from "next/link";

import logoImg from "@/assets/icons/cart.png";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
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
      <Avatar>
        <AvatarImage src="../../assets/icons/logo.jpg" alt="Surf Shop logo" />
        <AvatarFallback>SURF SHOP</AvatarFallback>
      </Avatar>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className={navigationMenuTriggerStyle()}>
            <Link href="">
              <NavigationMenuLink>BESTSELLERS</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuItem className={navigationMenuTriggerStyle()}>
          <Link href="">
            <NavigationMenuLink>TEES</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className={navigationMenuTriggerStyle()}>
          <Link href="">
            <NavigationMenuLink>HOODIES</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className={navigationMenuTriggerStyle()}>
          <Link href="" legacyBehavior passHref>
            <NavigationMenuLink>ABOUT</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className={navigationMenuTriggerStyle()}>
          <Link href="" legacyBehavior passHref>
            <NavigationMenuLink>SIGN IN</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenu>
      <Link href="/">
        <Image src={logoImg} alt="Cart" width={36} />
      </Link>
    </header>
  );
}
