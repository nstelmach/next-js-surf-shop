import SocialMediaIcons from "@/src/components/social-media/social-media-icons"
import Typography from "@/src/components/typography/typography"

export default function SocialMedia() {
  return (
    <div className="flex flex-col">
      <Typography as="h3" variant="base" weight="bold" className="m-2">
        OUR SOCIAL MEDIA
      </Typography>
      <SocialMediaIcons />
    </div>
  )
}
