"use client"
import ClothesList from "@/src/components/clothes/clothes-list/clothes-list"
import { useQuery } from "@blitzjs/rpc"
import getProducts from "@/src/queries/get-products"
import Loading from "@/src/app/loading"
import { Suspense } from "react"

export default function BestsellersPage() {
  const [bestsellers] = useQuery(getProducts, { bestseller: true })

  return (
    <Suspense fallback={<Loading />}>
      <ClothesList title="BESTSELLERS" items={bestsellers} />
    </Suspense>
  )
}
