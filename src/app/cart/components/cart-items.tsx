"use client"
import CartItemsCard from "@/src/app/cart/components/cart-items-card"
import Typography from "@/src/components/typography/typography"
import { useCurrentUser } from "@/src/app/user/hooks/use-current-user"
import { CartDetails } from "@/src/lib/types"

interface CartItemsProps {
  cart: CartDetails | null
}

export default function CartItems({ cart }: CartItemsProps) {
  const user = useCurrentUser()

  return (
    <div className="flex flex-col gap-4 xl:hidden">
      {cart && cart.cartProducts.length > 0 ? (
        cart.cartProducts.map((cartProduct) => (
          <CartItemsCard key={cartProduct.id} cartProduct={cartProduct} />
        ))
      ) : (
        <Typography as="p" variant="base" className="m-2 text-center">
          {user ? "Your cart is empty." : "Log in to add items to your cart!"}
        </Typography>
      )}
    </div>
  )
}
