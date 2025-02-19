import instagramIcon from "@/src/assets/svg/instagram.svg"
import facebookIcon from "@/src/assets/svg/facebook.svg"
import SocialMediaLink from "@/src/components/social-media/social-media-link"

export default function SocialMediaIcons() {
  return (
    <div className="hidden lg:flex lg:flex-row lg:justify-around lg:items-center lg:m-2 lg:gap-4">
      <SocialMediaLink href="https://instagram.com/" src={instagramIcon} alt="Instagram" />
      <SocialMediaLink href="https://facebook.com/" src={facebookIcon} alt="Facebook" />
    </div>
  )
}
