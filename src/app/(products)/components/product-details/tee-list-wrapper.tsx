"use client"
import { useQuery } from "@blitzjs/rpc"
import getProducts from "@/src/app/(products)/queries/get-products"
import { Category } from "@prisma/client"
import ProductList from "@/src/app/(products)/components/product-list/product-list"

export default function TeeListWrapper() {
  const [tees] = useQuery(getProducts, { category: Category.tees })

  return <ProductList title="TEES" items={tees} />
}
