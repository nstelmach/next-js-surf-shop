import CartDetails from "@/src/app/cart/components/cart-details"
import CartContainer from "@/src/app/cart/components/cart-container"

export default function CartPage() {
  return (
    <div className="flex xl:flex-row flex-col justify-center items-center xl:items-start xl:justify-between gap-4 xl:m-4 max-w-xs md:max-w-md xl:max-w-full xl:w-full h-full">
      <CartContainer />
      <CartDetails />
    </div>
  )
}
