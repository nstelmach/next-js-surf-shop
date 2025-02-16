"use client"
import ProductList from "@/src/app/(products)/components/product-list/product-list"
import { useQuery } from "@blitzjs/rpc"
import getProducts from "@/src/app/(products)/queries/get-products"
import { Category } from "@prisma/client"
import { Suspense } from "react"
import Loading from "@/src/app/loading"

export default function HoodiesPage() {
  const [hoodies] = useQuery(getProducts, { category: Category.hoodies })

  return (
    <Suspense fallback={<Loading />}>
      <ProductList title="HOODIES" items={hoodies} />
    </Suspense>
  )
}
