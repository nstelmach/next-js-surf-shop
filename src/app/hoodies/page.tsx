"use client"
import ClothesList from "@/src/components/clothes/clothes-list/clothes-list"
import { useQuery } from "@blitzjs/rpc"
import getProducts from "@/src/queries/getProducts"
import { Category } from "@prisma/client"
import Loading from "@/src/app/loading"
import { Suspense } from "react"

export default function HoodiesPage() {
  const [hoodies] = useQuery(getProducts, { category: Category.hoodies })

  return (
    <Suspense fallback={<Loading />}>
      <ClothesList title="HOODIES" items={hoodies} />
    </Suspense>
  )
}
