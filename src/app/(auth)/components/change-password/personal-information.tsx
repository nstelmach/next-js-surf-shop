"use client"
import { useCurrentUser } from "@/src/app/user/hooks/use-current-user"
import InformationItem from "@/src/app/(auth)/components/change-password/information-item"

export default function PersonalInformation() {
  const user = useCurrentUser()

  return (
    <div className="flex flex-col justify-center items-start lg:items-center">
      {user && <InformationItem title="Name:" name={user.name} />}
      {user && <InformationItem title="E-mail:" name={user.email} />}
    </div>
  )
}
