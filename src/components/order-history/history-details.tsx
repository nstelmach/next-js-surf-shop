import Paragraph from "@/src/components/typohgraphy/paragraph"
import Link from "next/link"
 
export default function HistoryDetails() {
  return (
    <>
      <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center">
        You have not placed any orders.
      </Paragraph>
      <Link
        href="/my-account"
        className="hover:underline xl:text-base text-xl md:text-2xl text-center"
      >
        Back to your account
      </Link>
    </>
  )
}
