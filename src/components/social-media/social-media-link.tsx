import Link from "next/link"
import Image, { StaticImageData } from "next/image"
import { StaticRequire } from "next/dist/shared/lib/get-img-props"

interface SocialMediaLinkProps {
  href: string
  src: string | StaticRequire | StaticImageData
  alt: string
}

export default function SocialMediaLink({ href, src, alt }: SocialMediaLinkProps) {
  return (
    <Link href={href} rel="noopener noreferrer" target="_blank">
      <Image className="xl:w-[24px] md:w-[36px] w-[32px]" src={src} alt={alt} width={24} />
    </Link>
  )
}
