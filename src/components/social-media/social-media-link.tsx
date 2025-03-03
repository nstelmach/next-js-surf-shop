import Link from "next/link"
import Image, { StaticImageData } from "next/image"
import { StaticRequire } from "next/dist/shared/lib/get-img-props"
import { Route } from "next"

interface SocialMediaLinkProps<T extends string> {
  href: Route<T> | URL
  src: string | StaticRequire | StaticImageData
  alt: string
}

export default function SocialMediaLink({ href, src, alt }: SocialMediaLinkProps<string>) {
  return (
    <Link href={href} rel="noopener noreferrer" target="_blank">
      <Image className="xl:w-[24px] md:w-[36px] w-[32px]" src={src} alt={alt} width={24} />
    </Link>
  )
}
