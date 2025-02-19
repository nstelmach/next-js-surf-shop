import { Separator } from "@/src/components/ui/separator"
import { Payment, Shipping } from "@prisma/client"
import { Control } from "react-hook-form"
import RadioGroupField from "@/src/components/fields/radio-group-field"

interface CartRadioGroupProps {
  title: string
  items: Shipping[] | Payment[]
  name: string
  control: Control
}

export default function CartRadioGroup({ title, items, name, control }: CartRadioGroupProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full">
      <RadioGroupField title={title} items={items} name={name} control={control} />
      <Separator orientation="horizontal" className="bg-muted mb-4" />
    </div>
  )
}
