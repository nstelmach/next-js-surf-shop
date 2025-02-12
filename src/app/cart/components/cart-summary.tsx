import Paragraph from "@/src/components/typography/paragraph"
import { Separator } from "@/src/components/ui/separator"
import CartSummarySection from "@/src/app/cart/components/cart-summary-section"

interface CartSummaryProps {
  shipping: number
  totalPrice: number
}

export default function CartSummary({ shipping, totalPrice }: CartSummaryProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full xl:m-2 gap-4">
      <Paragraph className="xl:text-xl md:text-3xl text-2xl font-bold">Summary</Paragraph>
      <Separator orientation="horizontal" />
      <CartSummarySection title="Products" price={totalPrice} />
      <CartSummarySection title="Shipping" price={shipping} />
      <Separator orientation="horizontal" className="bg-muted" />
      <div className="flex flex-row items-center justify-between gap-4 p-2 max-w-xs xl:max-w-full w-full">
        <Paragraph className="font-bold xl:text-base text-xl md:text-2xl">TOTAL:</Paragraph>
        <Paragraph className="xl:text-base text-xl md:text-2xl">
          {totalPrice + shipping} €
        </Paragraph>
      </div>
    </div>
  )
}
