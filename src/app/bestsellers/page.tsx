"use client"
import ClothesList from "@/src/components/clothes/clothes-list/clothes-list"
import { useQuery } from "@blitzjs/rpc"
import getProducts from "@/src/queries/getProducts"

export default function BestsellersPage() {
  const [bestsellers] = useQuery(getProducts, { bestseller: true })

  return <ClothesList title="BESTSELLERS" items={bestsellers} />
}
