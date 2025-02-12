import { PropsWithChildren } from "react"
import { cn } from "@/src/lib/utils"

export default function Paragraph({
  children,
  className,
}: PropsWithChildren<{
  className?: string
}>) {
  return <p className={cn("text-primary", className)}>{children}</p>
}

type TypographyProps = {
  variant?: "heading" | "body"
  as?: "p" | "h1"
}

export const varinatMap = {
  heading: "text-3xl",
  body: "text-lg",
}

function Typoraphy({ variant = "body", as }: TypographyProps) {
  const Comp = as ?? "p"

  return <Comp className={varinatMap[variant]}></Comp>
}
