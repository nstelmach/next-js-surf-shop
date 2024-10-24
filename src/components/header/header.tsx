import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/icons/logo.jpg";
import HeaderNavigationMenu from "@/components/header/header-navigation-menu";
import Flex from "@/components/typohgraphy/flex";
import cartIcon from "@/assets/svg/shopping-bag.svg";
import SocialMediaIcons from "@/components/social-media/social-media-icons";

export default function Header() {
    return <header
        className="flex flex-col justify-center items-center sticky top-0 bg-background z-10 p-2 md:p-4 md:px-8 gap-2">
        <Flex className="flex-row justify-between items-center w-full">
            <SocialMediaIcons/>
            <Link href="/" className="m-2">
                <Image src={logoImg} alt="Surf Shop Logo" width={150} className="xl:w-[150px] w-[200px]"/>
            </Link>
            <Link href="/cart" className="m-2">
                <Image src={cartIcon} alt="Cart" width={40} className="xl:w-[30px] md:w-[50px] w-[40px]"/>
            </Link>

        </Flex>
        <HeaderNavigationMenu/>
    </header>
}
