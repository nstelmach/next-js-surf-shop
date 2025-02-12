import { Cart } from "@prisma/client"
import CartItemsCard from "@/src/app/cart/components/cart-items-card"
import Paragraph from "@/src/components/typography/paragraph"

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
        <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center">
          Your cart is empty.
        </Paragraph>
      )}
    </div>
  )
}
