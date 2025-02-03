import Flex from "@/src/components/typohgraphy/flex"
import { Cart } from "@prisma/client"
import CartItemsCard from "@/src/components/cart/cart-items-card"
import Paragraph from "@/src/components/typohgraphy/paragraph"

interface CardItemsProps {
  cart: Cart
}

export default function CartItems({ cart }: CardItemsProps) {
  return (
    <Flex className="flex-col gap-4 xl:hidden">
      {cart && cart.cartProducts.length > 0 ? (
        cart.cartProducts.map((cartProduct) => (
          <CartItemsCard key={cartProduct.id} cartProduct={cartProduct} />
        ))
      ) : (
        <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center">
          Your cart is empty.
        </Paragraph>
      )}
    </Flex>
  )
}
