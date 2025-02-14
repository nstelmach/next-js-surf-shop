import Information from "@/src/components/footer/information"
import SocialMedia from "@/src/components/footer/social-media"
import Typography from "@/src/components/typography/typography"

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center xl:mt-16 mt-10 z-50">
      <div className="flex flex-col justify-center items-center xl:flex-row xl:justify-around xl:items-start w-full gap-2">
        <Information />
        <SocialMedia />
      </div>
      <Typography as="p" variant="small" className="text-center w-full m-4">
        COPYRIGHT © 2024 SURF SHOP
      </Typography>
    </footer>
  )
}
