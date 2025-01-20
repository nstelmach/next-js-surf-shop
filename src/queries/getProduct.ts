import db from "db"
import * as z from "zod"

const GetProduct = z.object({
  id: z.number(),
})

export default async function getProduct(input: z.infer<typeof GetProduct>) {
  const data = GetProduct.parse(input)

  return db.product.findUnique({
    where: { id: data.id },
    include: { images: true, price: true },
  })
}
