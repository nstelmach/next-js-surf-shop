"use client"
import CartTable from "@/src/app/cart/components/cart-table"
import CartItems from "@/src/app/cart/components/cart-items"
import { useQuery } from "@blitzjs/rpc"
import getCart from "@/src/app/cart/queries/get-cart"

export default function CartContainer() {
  const [cart] = useQuery(getCart, {})

  return (
    <div className="flex flex-col w-full">
      <CartTable cart={cart} />
      <CartItems cart={cart} />
    </div>
  )
}
