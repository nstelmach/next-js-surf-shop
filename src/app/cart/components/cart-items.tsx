import { Cart } from "@prisma/client"
import CartItemsCard from "@/src/app/cart/components/cart-items-card"
import Typography from "@/src/components/typography/typography"

interface CardItemsProps {
  cart: Cart
}

export default function CartItems({ cart }: CardItemsProps) {
  return (
    <div className="flex flex-col gap-4 xl:hidden">
      {cart && cart.cartProducts.length > 0 ? (
        cart.cartProducts.map((cartProduct) => (
          <CartItemsCard key={cartProduct.id} cartProduct={cartProduct} />
        ))
      ) : (
        <Typography as="p" variant="base" className="m-2 text-center">
          Your cart is empty.
        </Typography>
      )}
    </div>
  )
}
