import { Card, CardContent } from "@/src/components/ui/card"
import Typography from "@/src/components/typography/typography"
import ProductCard from "@/src/app/(order)/components/product-card"
import ParagraphSection from "@/src/components/section/paragraph-section"
import { Separator } from "@/src/components/ui/separator"
import { getLink } from "@/src/lib/utils"
import Link from "next/link"
import { OrderDetails } from "@/src/lib/types"

interface OrderCardProps {
  order: OrderDetails
}

export default function OrderCard({ order }: OrderCardProps) {
  const href = getLink("order", order.id)

  return (
    <Card className="p-2">
      <CardContent className="w-full flex flex-col gap-2 p-2">
        <ParagraphSection title="Order No.:" name={order.id.toString()} />
        <ParagraphSection title="Date:" name={order.createdAt.toLocaleDateString()} />
        <ParagraphSection title="Shipping:" name={order.shipping.label} />
        <ParagraphSection title="Payment:" name={order.payment.label} />
        <ParagraphSection title="Total Price:" name={`${order.price} €`} />
        <div className="flex flex-col justify-between w-full gap-2">
          <Typography as="p" variant="base">
            Products:
          </Typography>
          <div className="flex flex-col justify-center items-center gap-2">
            {order.products.map((product, index) => (
              <div key={product.id} className="w-full p-2">
                <Link href={href}>
                  <ProductCard product={product} />
                </Link>
                {index < order.products.length - 1 && (
                  <Separator orientation="horizontal" className="bg-muted mt-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
