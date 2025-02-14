"use client"
import { useCurrentUser } from "@/src/app/user/hooks/use-current-user"
import { Suspense } from "react"
import Loading from "@/src/app/loading"
import Typography from "@/src/components/typography/typography"

export default function PersonalInformation() {
  const user = useCurrentUser()

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex">
        <Typography as="p" variant="base" className="m-2 text-center">
          Name:{" "}
        </Typography>
        <Typography as="p" variant="base" className="m-2 text-center grow-2">
          {user.name}
        </Typography>
      </div>
      <div className="flex justify-around">
        <Typography as="p" variant="base" className="m-2 text-center">
          E-mail:{" "}
        </Typography>
        <Typography as="p" variant="base" className="m-2 text-center grow-2">
          {user.email}
        </Typography>
      </div>
    </Suspense>
  )
}
