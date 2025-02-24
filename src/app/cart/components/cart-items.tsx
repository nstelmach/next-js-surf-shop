"use client"
import { Cart } from "@prisma/client"
import CartItemsCard from "@/src/app/cart/components/cart-items-card"
import Typography from "@/src/components/typography/typography"
import { useCurrentUser } from "@/src/app/user/hooks/use-current-user"

interface CardItemsProps {
  cart: Cart
}

export default function CartItems({ cart }: CardItemsProps) {
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
