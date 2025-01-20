import Flex from "@/src/components/typohgraphy/flex"
import CartDetails from "@/src/components/cart/cart-details"
import CartContainer from "@/src/components/cart/cart-container"
 
export default function CartPage() {
  return (
    <Flex className="xl:flex-row flex-col justify-center items-center xl:items-start xl:justify-between gap-4 xl:m-4 max-w-xs md:max-w-md xl:max-w-full xl:w-full h-full">
      <CartContainer />
      <CartDetails />
    </Flex>
  )
}
