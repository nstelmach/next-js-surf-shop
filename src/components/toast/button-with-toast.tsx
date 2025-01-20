"use client"

import { Button } from "@/src/components/ui/button"
import { useToast } from "@/src/components/hooks/use-toast"
import { cn } from "@/src/lib/utils"

interface ToastWithRedirectProps {
  type: "submit" | "reset" | "button"
  description: string
  label: string
  className?: string
}

export default function ButtonWithToast({
  type,
  description,
  label,
  className,
}: ToastWithRedirectProps) {
  const { toast } = useToast()

  return (
    <Button
      type={type}
      onClick={() => {
        toast({
          description: description,
        })
      }}
      className={cn("xl:my-2", className)}
    >
      {label}
    </Button>
  )
}
