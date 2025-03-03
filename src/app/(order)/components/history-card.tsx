import Typography from "@/src/components/typography/typography"
import OrderCard from "@/src/app/(order)/components/order-card"
import { OrderDetails } from "@/src/lib/types"

interface HistoryCardProps {
  orders: OrderDetails[]
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
