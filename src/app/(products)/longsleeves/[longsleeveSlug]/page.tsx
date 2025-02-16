"use client"
import ProductDetails from "@/src/app/(products)/components/product-details/product-details"
import { useQuery } from "@blitzjs/rpc"
import getProduct from "@/src/app/(products)/queries/get-product"
import { useParams } from "next/navigation"
import { Suspense } from "react"
import ProductSkeleton from "@/src/components/skeletons/product-skeleton"

export default function LongsleeveDetailsPage() {
  const params = useParams<{ longsleeveSlug: string }>()
  const [longsleeve] = useQuery(getProduct, { id: +params.longsleeveSlug })

  return (
    <Suspense fallback={<ProductSkeleton />}>
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
