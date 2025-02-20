import CartContainer from "@/src/app/cart/components/cart-container"
import CartDetails from "@/src/app/cart/components/cart-details"
import { Suspense } from "react"
import CartSkeleton from "@/src/components/skeletons/cart-skeleton"
import Typography from "@/src/components/typography/typography"

export default function CartPage() {
  return (
    <div className="flex  flex-col justify-center items-center gap-4 xl:m-4 max-w-xs md:max-w-md xl:max-w-full xl:w-full h-full">
      <Typography as="h1" variant="2xlarge" weight="bold" className="m-4 text-center">
        YOUR CART
      </Typography>
      <Suspense fallback={<CartSkeleton />}>
        <div className="flex xl:flex-row flex-col justify-center items-center xl:items-start xl:justify-between gap-6 xl:gap-4 w-full">
          <CartContainer />
          <CartDetails />
        </div>
      </Suspense>
    </div>
  )
}
