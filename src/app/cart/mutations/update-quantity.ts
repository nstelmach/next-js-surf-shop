import { resolver } from "@blitzjs/rpc"
import db from "@/db"
import { ProductId, Quantity } from "@/src/lib/validations"

export default resolver.pipe(
  resolver.zod(Quantity.and(ProductId)),
  resolver.authorize(),
  async ({ quantity, productId }) => {
    if (!productId) throw new Error()

    return db.cartProduct.update({
      where: { id: productId },
      data: { quantity: +quantity },
    })
  }
)
