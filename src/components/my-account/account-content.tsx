import AccountButtons from "@/src/components/my-account/account-buttons"
import { LogoutButton } from "@/src/app/(auth)/components/logout/logout-button"

export default function AccountContent() {
  return (
    <>
      <AccountButtons />
      <LogoutButton />
    </>
  )
}
