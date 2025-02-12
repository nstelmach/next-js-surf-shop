//TODO finish
import { PropsWithChildren } from "react"

type TypographyProps = {
  variant?: "heading" | "text"
  as?: "p" | "h1" | "h2" | "h3"
}

export const variantMap = {
  body: "text-lg",
  big: "",
  small: "",
  normal: "",
  heading: "font-bold m-2 text-xl md:text-2xl xl:text-base",
  text: "text-xl md:text-2xl xl:text-base",
}

export default function Typography({
  variant = "body",
  as,
  children,
}: PropsWithChildren<TypographyProps>) {
  const Comp = as ?? "p"

  return <Comp className={variantMap[variant]}>{children}</Comp>
}
