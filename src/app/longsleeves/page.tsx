"use client"
import ClothesList from "@/src/components/clothes/clothes-list/clothes-list"
import { Category } from "@prisma/client"
import getProducts from "@/src/queries/get-products"
import { useQuery } from "@blitzjs/rpc"
import { Suspense } from "react"
import Loading from "@/src/app/loading"

export default function LongSleevesPage() {
  const [longsleeves] = useQuery(getProducts, { category: Category.longsleeves })

  return (
    <Suspense fallback={<Loading />}>
      <ClothesList title="LONGSLEEVES" items={longsleeves} />
    </Suspense>
  )
}
