"use client"
import Image from "next/image"
import Link from "next/link"
import logoImg from "@/src/assets/icons/logo.jpg"
import HeaderNavigationMenu from "@/src/components/header/header-navigation-menu"
import Flex from "@/src/components/typohgraphy/flex"
import cartIcon from "@/src/assets/svg/shopping-bag.svg"
import SocialMediaIcons from "@/src/components/social-media/social-media-icons"
import getCart from "@/src/queries/getCart"
import { useQuery } from "@blitzjs/rpc"

export default function Header() {
  const [cart] = useQuery(getCart)
  const totalQuantity = cart?.cartProducts?.reduce(
    (total, cartProduct) => total + cartProduct.quantity,
    0
  )

  console.log(totalQuantity)

  return (
    <header className="flex flex-col justify-center items-center sticky top-0 bg-background z-10 p-2 md:p-4 md:px-8 gap-2">
      <Flex className="flex-row justify-between items-center w-full">
        <SocialMediaIcons />
        <Link href="/" className="m-2">
          <Image
            src={logoImg}
            alt="Surf Shop Logo"
            width={150}
            className="xl:w-[150px] w-[200px]"
          />
        </Link>
        <Link href="/cart" className="relative m-2">
          <Image
            src={cartIcon}
            alt="Cart"
            width={40}
            className="xl:w-[30px] md:w-[50px] w-[40px]"
          />
          {totalQuantity > 0 && (
            <div className="absolute top-[-5px] right-[-5px] bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {totalQuantity}
            </div>
          )}
        </Link>
      </Flex>
      <HeaderNavigationMenu />
    </header>
  )
}
