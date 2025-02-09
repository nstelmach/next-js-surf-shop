import Link from "next/link"
import Flex from "@/src/components/typohgraphy/flex"

export default function NotFound() {
  return (
    <Flex className="flex-col justify-center items-center gap-2">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className=" hover:underline" href="/">
        Return Home
      </Link>
    </Flex>
  )
}
