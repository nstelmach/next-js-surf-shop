import { OrderProduct } from "@prisma/client"
import { Card, CardContent } from "@/src/components/ui/card"
import Typography from "@/src/components/typography/typography"
import Image from "next/image"
import ParagraphSection from "@/src/components/section/paragraph-section"

interface ProductCardProps {
  product: OrderProduct
}

export default function ProductCard({ product }: ProductCardProps) {
  const orderProduct = product.product
  const name = orderProduct.name
  return (
    <Card className="drop-shadow-none">
      <CardContent className="flex flex-col gap-2 p-2">
        <div className="flex flex-row justify-between items-center gap-2 m-2">
          <Image src={orderProduct.images[0].src} alt={name} width={100} height={200} />
          <Typography as="p" className="text-center">
            {name}
          </Typography>
        </div>
        <ParagraphSection title="Size:" name={product.size} />
        <ParagraphSection title="Quantity:" name={product.quantity.toString()} />
        <ParagraphSection title=" Price:" name={`${orderProduct.prices[0].price} €`} />
      </CardContent>
    </Card>
  )
}
