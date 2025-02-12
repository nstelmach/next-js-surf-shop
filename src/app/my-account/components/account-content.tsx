import AccountButtons from "@/src/app/my-account/components/account-buttons"
import { LogoutButton } from "@/src/app/(auth)/components/logout/logout-button"

export default function AccountContent() {
  return (
    <>
      <AccountButtons />
      <LogoutButton />
    </>
  )
}
