import Flex from "@/src/components/typohgraphy/flex"
import CartRadioGroup from "@/src/components/cart/cart-radio-group"
import { DELIVERY_ITEMS, SHIPPING_ITEMS } from "@/src/lib/constants"
import CartSummary from "@/src/components/cart/cart-summary"
import ButtonWithToast from "@/src/components/toast/button-with-toast"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"

export default function CartDetails() {
  return (
    <Flex className="flex-col items-center justify-center gap-2 xl:gap-4 xl:grow w-full xl:w-fit max-w-full">
      <CartRadioGroup title="Shipping" items={SHIPPING_ITEMS} />
      <CartRadioGroup title="Delivery" items={DELIVERY_ITEMS} />
      <CartSummary />
      <Flex className="xl:flex-row flex-col items-center justify-center gap-4 m-2 max-w-xs xl:max-w-full w-full">
        <ButtonWithToast
          type="submit"
          description="Your order has been successfully placed!"
          label="Order"
          className="flex-1"
        />
        <Link href="/public" className="flex-1 w-full">
          <Button className="!w-full" type="button">
            Continue shopping
          </Button>
        </Link>
      </Flex>
    </Flex>
  )
}
