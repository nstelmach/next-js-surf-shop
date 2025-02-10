import { FormControl } from "@/src/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select"
import { Size } from "@prisma/client"

interface SizeSelectProps {
  onChange: (...event: any[]) => void
  value: any
}

export default function SizeSelect({ onChange, value }: SizeSelectProps) {
  return (
    <Select onValueChange={onChange} defaultValue={value}>
      <FormControl>
        <SelectTrigger>
          <SelectValue placeholder="Choose a size" />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        <SelectItem value="XS">{Size.XS}</SelectItem>
        <SelectItem value="S">{Size.S}</SelectItem>
        <SelectItem value="M">{Size.M}</SelectItem>
        <SelectItem value="L">{Size.L}</SelectItem>
        <SelectItem value="XL">{Size.XL}</SelectItem>
      </SelectContent>
    </Select>
  )
}
