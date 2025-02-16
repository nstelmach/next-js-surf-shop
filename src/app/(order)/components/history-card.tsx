import Typography from "@/src/components/typography/typography"
import { Order } from "@prisma/client"
import OrderCard from "@/src/app/(order)/components/order-card"

interface HistoryCardProps {
  orders: Order[]
}

export default function HistoryCard({ orders }: HistoryCardProps) {
  return (
    <div className="flex flex-col gap-4 xl:hidden">
      {orders && orders.length > 0 ? (
        orders.map((order) => <OrderCard key={order.id} order={order} />)
      ) : (
        <Typography as="p" variant="base" className="m-2 text-center">
          You have not placed any orders.
        </Typography>
      )}
    </div>
  )
}
