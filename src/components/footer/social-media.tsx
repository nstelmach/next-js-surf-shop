import SocialMediaIcons from "@/src/components/social-media/social-media-icons"
import Typography from "@/src/components/typography/typography"

export default function SocialMedia() {
  return (
    <div className="flex flex-col">
      <Typography as="h3" variant="heading">
        OUR SOCIAL MEDIA
      </Typography>
      <SocialMediaIcons />
    </div>
  )
}
