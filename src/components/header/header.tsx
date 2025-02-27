import Image from "next/image"
import Link from "next/link"
import logoImg from "@/src/assets/icons/logo.jpg"
import HeaderNavigationMenu from "@/src/components/header/header-navigation-menu"
import cartIcon from "@/src/assets/svg/shopping-bag.svg"
import SocialMediaIcons from "@/src/components/social-media/social-media-icons"
import CartQuantity from "@/src/components/header/cart-quantity"
import HeaderMenu from "@/src/components/header/header-menu"
import ProfileMenu from "@/src/components/header/profile-menu"

export default function Header() {
  return (
    <header className="flex flex-col justify-center items-center sticky top-0 bg-background z-10 p-2 md:p-4 md:px-8 gap-2">
      <div className="flex flex-row justify-between items-center w-full">
        <div className="hidden lg:flex">
          <SocialMediaIcons />
        </div>
        <HeaderMenu />
        <Link href="/" className="m-2">
          <Image
            src={logoImg}
            alt="Surf Shop Logo"
            width={150}
            className="xl:w-[150px] w-[200px]"
          />
        </Link>
        <div className="flex flex-row justify-around items-center m-2 gap-4">
          <ProfileMenu />
          <Link href="/cart" className="relative">
            <Image
              src={cartIcon}
              alt="Cart"
              width={40}
              className="xl:w-[30px] md:w-[50px] w-[40px]"
            />
            <CartQuantity />
          </Link>
        </div>
      </div>
      <HeaderNavigationMenu />
    </header>
  )
}
