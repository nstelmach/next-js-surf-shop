"use client"
import ClothesList from "@/src/components/clothes/clothes-list/clothes-list"
import { useQuery } from "@blitzjs/rpc"
import getProducts from "@/src/queries/getProducts"
import { Category } from "@prisma/client"

export default function TeesPage() {
  const [tees] = useQuery(getProducts, { category: Category.tees })

  return <ClothesList title="TEES" items={tees} />
}
