import Flex from "@/src/components/typography/flex"
import Paragraph from "@/src/components/typography/paragraph"
import SocialMediaIcons from "@/src/components/social-media/social-media-icons"

export default function SocialMedia() {
  return (
    <Flex className="flex-col">
      <Paragraph className="font-bold m-2 text-xl md:text-2xl xl:text-base">
        OUR SOCIAL MEDIA
      </Paragraph>
      <SocialMediaIcons />
    </Flex>
  )
}
