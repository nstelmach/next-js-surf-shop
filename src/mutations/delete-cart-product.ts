import { resolver } from "@blitzjs/rpc"
import db from "@/db"

export default resolver.pipe(
  resolver.authorize(),
  async ({ cartProductId }: { cartProductId: number }) => {
    if (!cartProductId) throw Error
    return db.cartProduct.delete({
      where: { id: cartProductId },
    })
  }
)
