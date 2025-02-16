"use client"
import { useCurrentUser } from "@/src/app/user/hooks/use-current-user"
import { Suspense } from "react"
import InformationItem from "@/src/app/(auth)/components/change-password/information-item"
import Loading from "@/src/app/loading"

export default function PersonalInformation() {
  const user = useCurrentUser()

  return (
    <Suspense fallback={<Loading />}>
      <InformationItem title="Name:" name={user.name} />
      <InformationItem title="E-mail:" name={user.email} />
    </Suspense>
  )
}
