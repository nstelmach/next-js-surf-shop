"use client"
import ClothesList from "@/src/components/clothes/clothes-list/clothes-list"
import { useQuery } from "@blitzjs/rpc"
import getProducts from "@/src/queries/get-products"
import { Category } from "@prisma/client"
import { Suspense } from "react"
import Loading from "@/src/app/loading"

export default function TeesPage() {
  const [tees] = useQuery(getProducts, { category: Category.tees })

  return (
    <Suspense fallback={<Loading />}>
      <ClothesList title="TEES" items={tees} />
    </Suspense>
  )
}
