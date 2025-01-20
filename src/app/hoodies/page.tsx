"use client"
import ClothesList from "@/src/components/clothes/clothes-list/clothes-list"
import { useQuery } from "@blitzjs/rpc"
import getProducts from "@/src/queries/getProducts"
import { Category } from "@prisma/client"

export default function HoodiesPage() {
  const [hoodies] = useQuery(getProducts, { category: Category.hoodies })

  return <ClothesList title="HOODIES" items={hoodies} />
}
