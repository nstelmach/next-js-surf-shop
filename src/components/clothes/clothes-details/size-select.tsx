import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select"
import { Size } from "@prisma/client"

export default function SizeSelect({ setSize }) {
  return (
    <Select onValueChange={setSize}>
      <SelectTrigger>
        <SelectValue placeholder="Choose a size" />
      </SelectTrigger>
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
