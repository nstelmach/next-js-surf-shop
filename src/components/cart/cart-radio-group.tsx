import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group"
import { Label } from "@/src/components/ui/label"
import { RadioGroupCartItem } from "@/types"
import Flex from "@/src/components/typohgraphy/flex"
import Paragraph from "@/src/components/typohgraphy/paragraph"
import { Separator } from "@/src/components/ui/separator"

interface CartRadioGroupProps {
  title: string
  items: RadioGroupCartItem[]
}

export default function CartRadioGroup({ title, items }: CartRadioGroupProps) {
  return (
    <Flex className="flex-col items-center justify-center gap-4 xl:m-2 w-full">
      <Paragraph className="xl:text-xl md:text-3xl text-2xl font-bold m-2">{title}</Paragraph>
      <Separator orientation="horizontal" />
      <RadioGroup defaultValue={items[0].id}>
        {items.map((item) => (
          <Flex key={item.id} className="flex-row items-center justify-center gap-2">
            <RadioGroupItem value={item.id} id={item.id} />
            <Label htmlFor={item.id}>{item.label}</Label>
          </Flex>
        ))}
      </RadioGroup>
      <Separator orientation="horizontal" className="bg-muted" />
    </Flex>
  )
}
