import Flex from "@/src/components/typohgraphy/flex"

export default function PageWrapper({ children }) {
  return (
    <Flex className="flex-col justify-center items-center lg:min-h-[calc(100vh-553px)] p-5 gap-4">
      {children}
    </Flex>
  )
}
