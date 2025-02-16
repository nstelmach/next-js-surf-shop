"use client"
import ProductList from "@/src/app/(products)/components/product-list/product-list"
import { Category } from "@prisma/client"
import getProducts from "@/src/app/(products)/queries/get-products"
import { useQuery } from "@blitzjs/rpc"
import { Suspense } from "react"
import GridSkeleton from "@/src/components/skeletons/grid-skeleton"

export default function LongSleevesPage() {
  const [longsleeves] = useQuery(getProducts, { category: Category.longsleeves })

  return (
    <Suspense fallback={<GridSkeleton />}>
      <ProductList title="LONGSLEEVES" items={longsleeves} />
    </Suspense>
  )
}
