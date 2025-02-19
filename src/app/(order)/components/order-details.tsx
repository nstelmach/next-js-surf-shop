"use client"
import { useQuery } from "@blitzjs/rpc"
import getOrder from "@/src/app/(order)/queries/get-order"
import { useParams } from "next/navigation"
import Typography from "@/src/components/typography/typography"
import Link from "next/link"
import OrderCard from "@/src/app/(order)/components/order-card"

export default function OrderDetails() {
  const params = useParams<{ orderSlug: string }>()
  const [order] = useQuery(getOrder, { id: +params.orderSlug })

  return (
    <>
      <OrderCard order={order} />
      <Link href="/profile" className="hover:underline">
        <Typography as="p" variant="base" className="text-center m-2">
          Back to your account
        </Typography>
      </Link>
    </>
  )
}
