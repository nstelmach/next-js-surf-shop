import Information from "@/components/footer/information";
import SocialMedia from "@/components/footer/social-media";
import Flex from "@/components/typohgraphy/flex";
import Paragraph from "@/components/typohgraphy/paragraph";

export default function Footer() {
    return <footer className="flex flex-col justify-center items-center xl:mt-16 mt-10 z-50">
        <Flex
            className="flex-col justify-center items-center xl:flex-row xl:justify-around xl:items-start w-full gap-2">
            <Information/>
            <SocialMedia/>
        </Flex>
        <Paragraph className="text-center w-full m-4  text-lg md:text-xl xl:text-sm">COPYRIGHT © 2024 SURF
            SHOP</Paragraph>
    </footer>
}
