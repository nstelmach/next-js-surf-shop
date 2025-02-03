import Flex from "@/src/components/typohgraphy/flex"
import Paragraph from "@/src/components/typohgraphy/paragraph"
import { Separator } from "@/src/components/ui/separator"
import CartSummarySection from "@/src/components/cart/cart-summary-section"
import { useQuery } from "@blitzjs/rpc"
import getCart from "@/src/queries/getCart"

interface CartSummaryProps {
  shipping: number
}

export default function CartSummary({ shipping }: CartSummaryProps) {
  const [cart] = useQuery(getCart)

  const totalPrice = cart.cartProducts.reduce((total, cartProduct) => {
    return total + cartProduct.quantity * cartProduct.product.prices[0].price
  }, 0)

  return (
    <Flex className="flex-col items-center justify-center w-full xl:m-2 gap-4">
      <Paragraph className="xl:text-xl md:text-3xl text-2xl font-bold">Summary</Paragraph>
      <Separator orientation="horizontal" />
      <CartSummarySection title="Products" price={totalPrice} />
      <CartSummarySection title="Shipping" price={shipping} />
      <Separator orientation="horizontal" className="bg-muted" />
      <Flex className="flex-row items-center justify-between gap-4 p-2 max-w-xs xl:max-w-full w-full">
        <Paragraph className="font-bold xl:text-base text-xl md:text-2xl">TOTAL:</Paragraph>
        <Paragraph className="xl:text-base text-xl md:text-2xl">
          {totalPrice + shipping} €
        </Paragraph>
      </Flex>
    </Flex>
  )
}
