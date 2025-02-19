import Typography from "@/src/components/typography/typography"
import OrderDetails from "@/src/app/(order)/components/order-details"
import OrderSkeleton from "@/src/components/skeletons/order-skeleton"
import { Suspense } from "react"

export default async function OrderPage() {
  return (
    <>
      <Typography as="h1" variant="2xlarge" weight="bold" className="m-4 text-center">
        YOUR ORDER
      </Typography>
      <Suspense fallback={<OrderSkeleton />}>
        <OrderDetails />
      </Suspense>
    </>
  )
}
