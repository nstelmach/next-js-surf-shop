import db from "db"
import * as z from "zod"
import { GetProduct } from "@/src/lib/validations"

export default async function getProduct(input: z.infer<typeof GetProduct>) {
  const data = GetProduct.parse(input)

  return db.product.findUnique({
    where: { id: data.id },
    include: { images: true, prices: true },
  })
}
