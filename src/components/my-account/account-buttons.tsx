import Flex from "@/src/components/typohgraphy/flex"
import AccountButton from "@/src/components/my-account/account-button"
import { ShoppingBag, User } from "lucide-react"

export default function AccountButtons() {
  return (
    <Flex className="xl:flex-row flex-col items-center justify-center gap-4 m-4">
      <AccountButton
        href="/personal-information"
        label="Personal information"
        Icon={<User className="mr-2" />}
      />
      <AccountButton
        href="/order-history"
        label="Order history and details"
        Icon={<ShoppingBag className="mr-2" />}
      />
    </Flex>
  )
}
