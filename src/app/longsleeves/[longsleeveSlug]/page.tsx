"use client"
import ClothesDetails from "@/src/components/clothes/clothes-details/clothes-details"
import { useQuery } from "@blitzjs/rpc"
import getProduct from "@/src/queries/get-product"
import { useParams } from "next/navigation"
import Loading from "@/src/app/loading"
import { Suspense } from "react"

export default function LongsleeveDetailsPage() {
  const params = useParams<{ longsleeveSlug: string }>()
  const [longsleeve] = useQuery(getProduct, { id: +params.longsleeveSlug })

  return (
    <Suspense fallback={<Loading />}>
      <ClothesDetails
        productId={longsleeve.id}
        title={longsleeve.name}
        description={longsleeve.description}
        prices={longsleeve.prices}
        images={longsleeve.images}
      />
    </Suspense>
  )
}
