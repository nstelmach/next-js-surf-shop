"use client"
import ProductList from "@/src/app/(products)/components/product-list/product-list"
import { useQuery } from "@blitzjs/rpc"
import getProducts from "@/src/app/(products)/queries/get-products"
import { Category } from "@prisma/client"

export default function HoodieListWrapper() {
  const [hoodies] = useQuery(getProducts, { category: Category.hoodies })

  return <ProductList title="HOODIES" items={hoodies} />
}
