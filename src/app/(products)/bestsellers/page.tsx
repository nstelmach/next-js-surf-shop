"use client"
import ProductList from "@/src/app/(products)/components/product-list/product-list"
import { useQuery } from "@blitzjs/rpc"
import getProducts from "@/src/app/(products)/queries/get-products"
import { Suspense } from "react"
import GridSkeleton from "@/src/components/skeletons/grid-skeleton"

export default function BestsellersPage() {
  const [bestsellers] = useQuery(getProducts, { bestseller: true })

  return (
    <Suspense fallback={<GridSkeleton />}>
      <ProductList title="BESTSELLERS" items={bestsellers} />
    </Suspense>
  )
}
