import { resolver } from "@blitzjs/rpc"
import db from "@/db"

export default resolver.pipe(
  resolver.authorize(),
  async ({ shipping, payment, cartId }: { shipping: string; payment: string; cartId: number }) => {
    if (!shipping || !payment || !cartId) throw Error
    return db.cart.update({
      where: { id: cartId },
      data: { shippingName: shipping, paymentName: payment },
    })
  }
)
