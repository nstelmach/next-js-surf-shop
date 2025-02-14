import db from "@/db"
import { GetProduct } from "@/src/lib/validations"
import { resolver } from "@blitzjs/rpc"

export default resolver.pipe(resolver.zod(GetProduct), async ({ id }) => {
  return db.product.findUnique({
    where: { id },
    include: { images: true, prices: true },
  })
})
