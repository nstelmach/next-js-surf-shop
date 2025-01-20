import { Checkbox } from "@/src/components/ui/checkbox"
import Link from "next/link"
import Flex from "@/src/components/typohgraphy/flex"
import { Label } from "@/src/components/ui/label"

export default function TermsCheckbox() {
  return (
    <Flex className="xl:items-center md:items-baseline justify-center gap-2 m-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">
        I have read the <Link href="/privacy-policy">privacy policy</Link> and accept the{" "}
        <Link href="/terms-and-conditions">terms and conditions</Link>
      </Label>
    </Flex>
  )
}
