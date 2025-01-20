import CartTable from "@/src/components/cart/cart-table"
import { CART_ITEMS } from "@/src/lib/constants"
import CartItems from "@/src/components/cart/cart-items"

export default function CartContainer() {
  return (
    <>
      <CartTable items={CART_ITEMS} />
      <CartItems items={CART_ITEMS} />
    </>
  )
}
