"use client"
import ProductList from "@/src/app/(products)/components/product-list/product-list"
import { useQuery } from "@blitzjs/rpc"
import getProducts from "@/src/app/(products)/queries/get-products"
import { Category } from "@prisma/client"
import { Suspense } from "react"
import GridSkeleton from "@/src/components/skeletons/grid-skeleton"

export default function HoodiesPage() {
  const [hoodies] = useQuery(getProducts, { category: Category.hoodies })

  return (
    <Suspense fallback={<GridSkeleton />}>
      <ProductList title="HOODIES" items={hoodies} />
    </Suspense>
  )
}
