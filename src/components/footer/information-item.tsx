import Link from "next/link"
import Typography from "@/src/components/typography/typography"
import { Route } from "next"

interface InformationItemProps<T extends string> {
  href: Route<T> | URL
  name: string
}

export default function InformationItem({ href, name }: InformationItemProps<string>) {
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
