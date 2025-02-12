import AccountButton from "@/src/app/my-account/components/account-button"
import { ShoppingBag, User } from "lucide-react"

export default function AccountButtons() {
  return (
    <div className="flex xl:flex-row flex-col items-center justify-center gap-4 m-4">
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
    </div>
  )
}
