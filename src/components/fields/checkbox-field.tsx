import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/src/components/ui/form"
import { Checkbox } from "@/src/components/ui/checkbox"

interface CheckboxFieldProps {
  control: any
  name: string
  label: JSX.Element | string
}

export default function CheckboxField({ control, name, label }: CheckboxFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex xl:items-center md:items-baseline justify-center gap-2 m-2">
            <FormControl>
              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
            <FormLabel>{label}</FormLabel>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
