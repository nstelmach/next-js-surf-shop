"use client"
import { useCurrentUser } from "@/src/app/user/hooks/use-current-user"
import { Suspense } from "react"
import { Skeleton } from "@/src/components/ui/skeleton"
import InformationItem from "@/src/app/(auth)/components/change-password/information-item"

export default function PersonalInformation() {
  const user = useCurrentUser()

  return (
    <Suspense fallback={<Skeleton className="h-[150px] w-[400px]" />}>
      <InformationItem title="Name:" name={user.name} />
      <InformationItem title="E-mail:" name={user.email} />
    </Suspense>
  )
}
