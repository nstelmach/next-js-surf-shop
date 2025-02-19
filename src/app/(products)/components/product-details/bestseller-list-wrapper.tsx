"use client"
import { useQuery } from "@blitzjs/rpc"
import getProducts from "@/src/app/(products)/queries/get-products"
import ProductList from "@/src/app/(products)/components/product-list/product-list"

export default function BestsellerListWrapper() {
  const [bestsellers] = useQuery(getProducts, { bestseller: true })

  return <ProductList title="BESTSELLERS" items={bestsellers} />
}
