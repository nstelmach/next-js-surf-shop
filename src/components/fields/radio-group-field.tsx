import { Payment, Shipping } from "@prisma/client"
import { Control } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel } from "@/src/components/ui/form"
import { Separator } from "@/src/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group"

interface RadioGroupFieldProps {
  title: string
  items: Shipping[] | Payment[]
  name: string
  control: Control
}

export default function RadioGroupField({ title, items, name, control }: RadioGroupFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-col items-center justify-center gap-4 xl:m-2 w-full">
          <FormLabel className="w-full text-center xl:text-xl md:text-3xl text-2xl font-bold m-2">
            {title}
          </FormLabel>
          <Separator orientation="horizontal" />
          <FormControl>
            <RadioGroup onValueChange={field.onChange} defaultValue={field.value}>
              {items.map((item) => (
                <FormItem key={item.id} className="flex flex-row items-center justify-center gap-2">
                  <FormControl>
                    <RadioGroupItem value={item.name} />
                  </FormControl>
                  <FormLabel>{item.label}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
  )
}
