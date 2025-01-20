import Flex from "@/src/components/typohgraphy/flex"
import Link from "next/link"
import Image from "next/image"
import Paragraph from "@/src/components/typohgraphy/paragraph"
import { Input } from "@/src/components/ui/input"
import { Button } from "@/src/components/ui/button"
import { XIcon } from "lucide-react"
import { CartItem } from "@/types"
import { Card, CardContent, CardFooter } from "@/src/components/ui/card"

interface CardItemsProps {
  items: CartItem[]
}

export default function CartItems({ items }: CardItemsProps) {
  return (
    <Flex className="flex-col gap-4 xl:hidden">
      {items.map((item) => (
        <Card className="p-2 gap-2" key={item.id}>
          <CardContent>
            <Flex className="flex-row justify-center items-start gap-2">
              <Link href={`/${item.category}/${item.id}`}>
                <Image src={item.image} alt={item.name} width={100} />
              </Link>
              <Flex className="flex-col justify-center items-center gap-2">
                <Link href={`/${item.category}/${item.id}`}>
                  <Paragraph className="xl:text-base text-lg md:text-xl text-center font-bold">
                    {item.name}
                  </Paragraph>
                </Link>
                <Paragraph className="xl:text-base text-lgl md:text-xl">{item.size}</Paragraph>
              </Flex>
              <Button type="button" variant="ghost" size="icon" className="items-start">
                <XIcon className="h-4 w-4" />
              </Button>
            </Flex>
          </CardContent>
          <CardFooter className="w-full gap-4">
            <Paragraph>{item.price} €</Paragraph>
            <Input className="max-w-fit" type="text" placeholder={`${item.quantity} pcs.`} />
            <Paragraph>{item.quantity * item.price} €</Paragraph>
          </CardFooter>
        </Card>
      ))}
    </Flex>
  )
}
