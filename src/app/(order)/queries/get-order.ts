import { resolver } from "@blitzjs/rpc"
import db from "@/db"
import { GetOrder } from "@/src/lib/validations"

export default resolver.pipe(resolver.zod(GetOrder), async ({ id }) => {
  return db.order.findUnique({
    where: { id },
    include: {
      shipping: true,
      payment: true,
      products: { include: { product: { include: { images: true, prices: true } } } },
    },
  })
})
