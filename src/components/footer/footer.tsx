import Information from "@/src/components/footer/information"
import SocialMedia from "@/src/components/footer/social-media"
import Paragraph from "@/src/components/typography/paragraph"

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center xl:mt-16 mt-10 z-50">
      <div className="flex flex-col justify-center items-center xl:flex-row xl:justify-around xl:items-start w-full gap-2">
        <Information />
        <SocialMedia />
      </div>
      <Paragraph className="text-center w-full m-4 text-lg md:text-xl xl:text-sm">
        COPYRIGHT © 2024 SURF SHOP
      </Paragraph>
    </footer>
  )
}
