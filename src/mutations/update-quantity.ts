import { resolver } from "@blitzjs/rpc"
import db from "@/db"

export default resolver.pipe(
  resolver.authorize(),
  async ({ quantity, cartProductId }: { quantity: number; cartProductId: number }) => {
    if (!quantity || !cartProductId) throw Error
    return db.cartProduct.update({
      where: { id: cartProductId },
      data: { quantity: +quantity },
    })
  }
)
