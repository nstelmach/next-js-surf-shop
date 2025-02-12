"use client"
import { useQuery } from "@blitzjs/rpc"
import getCart from "@/src/app/cart/queries/get-cart"

export default function CartQuantity() {
  const [cart] = useQuery(getCart)
  const totalQuantity = cart?.cartProducts?.reduce(
    (total, cartProduct) => total + cartProduct.quantity,
    0
  )

  return (
    <>
      {totalQuantity > 0 && (
        <div className="absolute top-[-5px] right-[-5px] bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
          {totalQuantity}
        </div>
      )}
    </>
  )
}
