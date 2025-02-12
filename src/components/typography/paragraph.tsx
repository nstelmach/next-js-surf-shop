import { PropsWithChildren } from "react"
import { cn } from "@/src/lib/utils" //TODO delete

//TODO delete, check p, h1 etc
export default function Paragraph({
  children,
  className,
}: PropsWithChildren<{
  className?: string
}>) {
  return <p className={cn("text-primary", className)}>{children}</p>
}
