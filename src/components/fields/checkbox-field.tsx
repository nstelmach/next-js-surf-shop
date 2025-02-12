import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/src/components/ui/form"
import { Checkbox } from "@/src/components/ui/checkbox"
import Link from "next/link"
import { Control } from "react-hook-form"

interface CheckboxFieldProps {
  control: Control
  name: string
}

export default function CheckboxField({ control, name }: CheckboxFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex xl:items-center md:items-baseline justify-center gap-2 m-2">
            <FormControl>
              <Checkbox id="terms" checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
            <FormLabel>
              I have read the{" "}
              <Link href="/privacy-policy" className="hover:underline">
                privacy policy
              </Link>{" "}
              and accept the{" "}
              <Link href="/terms-and-conditions" className="hover:underline">
                terms and conditions
              </Link>
            </FormLabel>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
