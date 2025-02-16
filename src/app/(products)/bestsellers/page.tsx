"use client"
import ProductList from "@/src/app/(products)/components/product-list/product-list"
import { useQuery } from "@blitzjs/rpc"
import getProducts from "@/src/app/(products)/queries/get-products"
import { Suspense } from "react"
import Loading from "@/src/app/loading"

export default function BestsellersPage() {
  const [bestsellers] = useQuery(getProducts, { bestseller: true })

  return (
    <Suspense fallback={<Loading />}>
      <ProductList title="BESTSELLERS" items={bestsellers} />
    </Suspense>
  )
}
