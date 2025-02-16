"use client"
import { Suspense } from "react"
import CartTable from "@/src/app/cart/components/cart-table"
import CartItems from "@/src/app/cart/components/cart-items"
import { useQuery } from "@blitzjs/rpc"
import getCart from "@/src/app/cart/queries/get-cart"
import { Skeleton } from "@/src/components/ui/skeleton"

export default function CartContainer() {
  const [cart] = useQuery(getCart)

  return (
    <Suspense fallback={<Skeleton className="h-[300px] w-[1100px]" />}>
      <CartTable cart={cart} />
      <CartItems cart={cart} />
    </Suspense>
  )
}
