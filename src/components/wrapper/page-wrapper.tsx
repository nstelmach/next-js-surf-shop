import { PropsWithChildren } from "react"

export default function PageWrapper({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col justify-center items-center lg:min-h-[calc(100vh-553px)] p-5 gap-4">
      {children}
    </div>
  )
}
