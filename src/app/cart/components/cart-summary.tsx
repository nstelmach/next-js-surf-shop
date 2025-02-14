import { Separator } from "@/src/components/ui/separator"
import CartSummarySection from "@/src/app/cart/components/cart-summary-section"
import Typography from "@/src/components/typography/typography"

interface CartSummaryProps {
  shipping: number
  totalPrice: number
}

export default function CartSummary({ shipping, totalPrice }: CartSummaryProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full xl:m-2 gap-4">
      <Typography as="h2" variant="xlarge" weight="bold">
        Summary
      </Typography>
      <Separator orientation="horizontal" />
      <CartSummarySection title="Products" price={totalPrice} />
      <CartSummarySection title="Shipping" price={shipping} />
      <Separator orientation="horizontal" className="bg-muted" />
      <div className="flex flex-row items-center justify-between gap-4 p-2 max-w-xs xl:max-w-full w-full">
        <Typography as="p" variant="base" weight="bold">
          TOTAL:
        </Typography>
        <Typography as="p" variant="base">
          {totalPrice + shipping} €
        </Typography>
      </div>
    </div>
  )
}
