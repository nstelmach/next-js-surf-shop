import { PropsWithChildren } from "react"
import { cn } from "@/src/lib/utils"

type TypographyProps = {
  variant?: "base" | "small" | "2xlarge" | "xsmall" | "xlarge"
  as?: "p" | "h1" | "h2" | "h3"
  weight?: "bold" | "normal"
  className?: string
}

export const variantMap = {
  base: "text-xl md:text-2xl xl:text-base",
  small: "text-lg md:text-xl xl:text-sm",
  "2xlarge": "text-3xl md:text-4xl xl:text-2xl",
  xsmall: "text-sm md:text-md xl:text-xs ",
  xlarge: "text-2xl md:text-3xl xl:text-xl",
}

export const weightMap = {
  bold: "font-bold",
  normal: "font-normal",
}

export default function Typography({
  variant = "base",
  as = "p",
  weight = "normal",
  children,
  className,
}: PropsWithChildren<TypographyProps>) {
  const Comp = as

  return <Comp className={cn(variantMap[variant], weightMap[weight], className)}>{children}</Comp>
}
