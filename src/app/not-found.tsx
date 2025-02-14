import Link from "next/link"
import Typography from "@/src/components/typography/typography"

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Typography as="h2" variant="base">
        Not Found
      </Typography>
      <Typography as="p" variant="base">
        Could not find requested resource
      </Typography>
      <Link className="hover:underline" href="/">
        Return Home
      </Link>
    </div>
  )
}
