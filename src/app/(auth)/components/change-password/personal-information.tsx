"use client"
import Flex from "@/src/components/typohgraphy/flex"
import Paragraph from "@/src/components/typohgraphy/paragraph"
import { useCurrentUser } from "@/src/hooks/use-current-user"

export default function PersonalInformation() {
  const user = useCurrentUser()

  return (
    <>
      <Flex>
        <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center ">Name:</Paragraph>
        <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center grow-2">
          {user?.name}
        </Paragraph>
      </Flex>
      <Flex className="justify-around">
        <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center">E-mail:</Paragraph>
        <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center grow-2">
          {user?.email}
        </Paragraph>
      </Flex>
    </>
  )
}
