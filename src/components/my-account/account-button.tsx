import Link from "next/link"
import { Button } from "@/src/components/ui/button"

interface AccountButtonProps {
  href: string
  label: string
  Icon: JSX.Element
}

export default function AccountButton({ href, label, Icon }: AccountButtonProps) {
  return (
    <Link href={href} className="w-full">
      <Button type="button" className="xl:min-w-72 md:min-w-96">
        {Icon} {label}
      </Button>
    </Link>
  )
}
