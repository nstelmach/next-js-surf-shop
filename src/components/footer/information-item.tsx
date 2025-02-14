import Link from "next/link"
import Typography from "@/src/components/typography/typography"

interface InformationItemProps {
  href: string
  name: string
}

export default function InformationItem({ href, name }: InformationItemProps) {
  return (
    <li className="m-2 hover:text-accent-foreground">
      <Link href={href}>
        <Typography as="p" variant="base">
          {name}
        </Typography>
      </Link>
    </li>
  )
}
