"use client"
import CartTable from "@/src/app/cart/components/cart-table"
import CartItems from "@/src/app/cart/components/cart-items"
import { useQuery } from "@blitzjs/rpc"
import getCart from "@/src/app/cart/queries/get-cart"
import Typography from "@/src/components/typography/typography"

export default function CartContainer() {
  const [cart] = useQuery(getCart)

  return (
    <div className="flex flex-col w-full">
      <Typography as="h1" variant="2xlarge" weight="bold" className="m-4 text-center">
        YOUR CART
      </Typography>
      <CartTable cart={cart} />
      <CartItems cart={cart} />
    </div>
  )
}
