"use client"
import ClothesList from "@/src/components/clothes/clothes-list/clothes-list"
import { Category } from "@prisma/client"
import getProducts from "@/src/queries/getProducts"
import { useQuery } from "@blitzjs/rpc"

export default function LongSleevesPage() {
  const [longsleeves] = useQuery(getProducts, { category: Category.longsleeves })

  return <ClothesList title="LONGSLEEVES" items={longsleeves} />
}
