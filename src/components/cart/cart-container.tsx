"use client"
import Loading from "@/src/app/loading"
import { Suspense } from "react"
import CartTable from "@/src/components/cart/cart-table"
import CartItems from "@/src/components/cart/cart-items"
import { useQuery } from "@blitzjs/rpc"
import getCart from "@/src/queries/getCart"

export default function CartContainer() {
  const [cart] = useQuery(getCart)

  return (
    <Suspense fallback={<Loading />}>
      <CartTable cart={cart} />
      <CartItems cart={cart} />
    </Suspense>
  )
}
