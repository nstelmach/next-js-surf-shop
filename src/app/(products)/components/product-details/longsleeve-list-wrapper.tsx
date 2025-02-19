"use client"
import { useQuery } from "@blitzjs/rpc"
import getProducts from "@/src/app/(products)/queries/get-products"
import { Category } from "@prisma/client"
import ProductList from "@/src/app/(products)/components/product-list/product-list"

export default function LongsleeveListWrapper() {
  const [longsleeves] = useQuery(getProducts, { category: Category.longsleeves })

  return <ProductList title="LONGSLEEVES" items={longsleeves} />
}
