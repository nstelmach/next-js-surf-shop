import Flex from "@/components/typohgraphy/flex";
import Link from "next/link";
import Image from "next/image";
import instagramIcon from "@/assets/svg/instagram.svg";
import facebookIcon from "@/assets/svg/facebook.svg";

export default function SocialMediaIcons() {
    return <Flex className="flex-row justify-around items-center m-2 gap-4">
        <Link
            href="https://instagram.com/"
            rel="noopener noreferrer"
            target="_blank"

        >
            <Image className="xl:w-[24px] md:w-[36px] w-[32px]" src={instagramIcon} alt="Instagram" width={24}/>
        </Link>
        <Link
            href="https://facebook.com/"
            rel="noopener noreferrer"
            target="_blank"
        >
            <Image className="xl:w-[24px] md:w-[36px] w-[32px]" src={facebookIcon} alt="Facebook" width={24}/>
        </Link>
    </Flex>
}