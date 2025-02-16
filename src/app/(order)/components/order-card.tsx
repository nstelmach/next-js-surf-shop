import { Order } from "@prisma/client"
import { Card, CardContent } from "@/src/components/ui/card"
import Typography from "@/src/components/typography/typography"
import ProductCard from "@/src/app/(order)/components/product-card"
import ParagraphSection from "@/src/components/section/paragraph-section"

interface OrderCardProps {
  order: Order
}

export default function OrderCard({ order }: OrderCardProps) {
  return (
    <Card className="p-2">
      <CardContent className="w-full flex flex-col gap-2 p-2">
        <ParagraphSection title="Order No.:" name={order.id.toString()} />
        <ParagraphSection title="Date:" name={order.createdAt.toLocaleDateString()} />
        <div className="flex flex-col justify-between w-full gap-2">
          <Typography as="p" variant="base">
            Products:
          </Typography>
          <div className="flex flex-col justify-center items-center gap-2">
            {order.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <ParagraphSection title="Shipping:" name={order.shipping.label} />
        <ParagraphSection title="Payment:" name={order.payment.label} />
        <ParagraphSection title="Total Price:" name={`${order.price} €`} />
      </CardContent>
    </Card>
  )
}
