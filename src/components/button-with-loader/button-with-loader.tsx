import { Button } from "@/src/components/ui/button"
import { cn } from "@/src/lib/utils"
import { Loader2 } from "lucide-react"
import { PropsWithChildren } from "react"

interface ButtonWithLoaderProps {
  type: "submit" | "reset" | "button"
  label?: string
  className?: string
  isLoading: boolean
  onClick?: () => void
  size?: "default" | "icon" | "lg" | "sm"
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  icon?: JSX.Element
}

export default function ButtonWithLoader({
  type,
  label,
  className,
  isLoading,
  onClick,
  children,
  size,
  variant,
  icon,
}: PropsWithChildren<ButtonWithLoaderProps>) {
  return (
    <Button
      onClick={onClick}
      type={type}
      className={cn("xl:my-2", className)}
      size={size}
      variant={variant}
    >
      {isLoading ? (
        <Loader2 className="animate-spin" />
      ) : (
        <>
          {icon}
          {label}
        </>
      )}
      {children}
    </Button>
  )
}
