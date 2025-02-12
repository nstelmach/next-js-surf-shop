import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/src/components/ui/form"
import { Textarea } from "@/src/components/ui/textarea"
import { Control } from "react-hook-form"

interface TextAreaFieldProps {
  control: Control
  name: string
  label: string
}

export default function TextAreaField({ control, name, label }: TextAreaFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea className="resize-none" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
