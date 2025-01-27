import { Button } from "@/src/components/ui/button"
import { cn } from "@/src/lib/utils"
import { Loader2 } from "lucide-react"

interface ButtonWithLoaderProps {
  type: "submit" | "reset" | "button"
  label: string
  className?: string
  isLoading: boolean
  onClick?: () => void
}

export default function ButtonWithLoader({
  type,
  label,
  className,
  isLoading,
  onClick,
}: ButtonWithLoaderProps) {
  return (
    <Button onClick={onClick} type={type} className={cn("xl:my-2", className)}>
      {isLoading ? <Loader2 className="animate-spin" /> : label}
    </Button>
  )
}
