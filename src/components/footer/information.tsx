import Link from "next/link"
import Newsletter from "@/src/components/newsletter/newsletter"
import Flex from "@/src/components/typohgraphy/flex"
import Paragraph from "@/src/components/typohgraphy/paragraph"
 
export default function Information() {
  return (
    <Flex className="flex-col justify-center items-center">
      <Paragraph className="font-bold m-2 text-xl md:text-2xl xl:text-base">INFORMATION</Paragraph>
      <ul className="m-2 flex flex-col justify-center items-center xl:items-start">
        <li className="m-2 hover:text-accent-foreground">
          <Link href="/contact">
            <span className="text-xl md:text-2xl xl:text-base">CONTACT US</span>
          </Link>
        </li>
        <li className="m-2 hover:text-accent-foreground">
          <Link href="/about">
            <span className="text-xl md:text-2xl xl:text-base">ABOUT US</span>
          </Link>
        </li>
        <li className="m-2 hover:text-accent-foreground">
          <Link href="/terms-and-conditions">
            <span className="text-xl md:text-2xl xl:text-base">TERMS AND CONDITIONS</span>
          </Link>
        </li>
        <li className="m-2 hover:text-accent-foreground">
          <Link href="/privacy-policy">
            <span className="text-xl md:text-2xl xl:text-base">PRIVACY POLICY</span>
          </Link>
        </li>
        <li className="m-2 cursor-pointer hover:text-accent-foreground">
          <Newsletter />
        </li>
      </ul>
    </Flex>
  )
}
