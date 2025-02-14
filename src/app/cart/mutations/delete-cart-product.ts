import { resolver } from "@blitzjs/rpc"
import db from "@/db"
import { ProductId } from "@/src/lib/validations"

export default resolver.pipe(
  resolver.zod(ProductId),
  resolver.authorize(),
  async ({ productId }) => {
    if (!productId) throw new Error()

    return db.cartProduct.delete({
      where: { id: productId },
    })
  }
)
