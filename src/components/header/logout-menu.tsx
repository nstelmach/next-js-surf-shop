"use client"
import { useCurrentUser } from "@/src/app/user/hooks/use-current-user"
import { DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { LogoutButton } from "@/src/app/(auth)/components/logout/logout-button"

export default function LogoutMenu() {
  const user = useCurrentUser()

  return (
    <>
      {user && (
        <>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogoutButton />
          </DropdownMenuItem>
        </>
      )}
    </>
  )
}
