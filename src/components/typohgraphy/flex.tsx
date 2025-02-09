import { PropsWithChildren } from "react"
import { cn } from "@/src/lib/utils"

export default function Flex({
  children,
  className,
}: PropsWithChildren<{
  className?: string
}>) {
  return <div className={cn("flex", className)}>{children}</div>
}
