import db from "@/db"
import { GetProducts } from "@/src/lib/validations"
import { resolver } from "@blitzjs/rpc"

export default resolver.pipe(resolver.zod(GetProducts), async ({ category, bestseller }) => {
  return db.product.findMany({
    where: { category, bestseller },
    include: { images: true, prices: true },
  })
})
