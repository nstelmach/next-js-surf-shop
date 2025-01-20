import db from "db"
import * as z from "zod"
import { Category } from "@prisma/client"

const GetProducts = z.object({
  category: z.nativeEnum(Category).optional(),
  bestseller: z.boolean().optional(),
})

export default async function getProducts(input: z.infer<typeof GetProducts>) {
  const data = GetProducts.parse(input)

  return db.product.findMany({
    where: { category: data.category, bestseller: data.bestseller },
    include: { images: true, price: true },
  })
}
