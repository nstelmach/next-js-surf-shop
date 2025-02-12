"use client"
import ProductDetails from "@/src/app/(products)/components/product-details/product-details"
import { useQuery } from "@blitzjs/rpc"
import getProduct from "@/src/app/(products)/queries/get-product"
import { useParams } from "next/navigation"
import Loading from "@/src/app/loading"
import { Suspense } from "react"

export default function LongsleeveDetailsPage() {
  const params = useParams<{ longsleeveSlug: string }>()
  const [longsleeve] = useQuery(getProduct, { id: +params.longsleeveSlug })

  return (
    <Suspense fallback={<Loading />}>
      <ProductDetails
        productId={longsleeve.id}
        title={longsleeve.name}
        description={longsleeve.description}
        prices={longsleeve.prices}
        images={longsleeve.images}
      />
    </Suspense>
  )
}
