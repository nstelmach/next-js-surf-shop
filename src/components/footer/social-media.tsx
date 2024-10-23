import Flex from "@/components/typohgraphy/flex";
import Paragraph from "@/components/typohgraphy/paragraph";
import SocialMediaIcons from "@/components/social-media/social-media-icons";

export default function SocialMedia() {
    return <Flex className="flex-col">
        <Paragraph className="font-bold m-2 text-xl md:text-2xl xl:text-base">OUR SOCIAL MEDIA</Paragraph>
        <SocialMediaIcons/>
    </Flex>
}