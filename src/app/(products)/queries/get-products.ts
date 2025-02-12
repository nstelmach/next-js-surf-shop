import db from "@/db"
import * as z from "zod"
import { GetProducts } from "@/src/lib/validations"

export default async function getProducts(input: z.infer<typeof GetProducts>) {
  const data = GetProducts.parse(input)

  return db.product.findMany({
    where: { category: data.category, bestseller: data.bestseller },
    include: { images: true, prices: true },
  })
}
