"use client"
import ProductDetails from "@/src/app/(products)/components/product-details/product-details"
import { useQuery } from "@blitzjs/rpc"
import getProduct from "@/src/app/(products)/queries/get-product"
import { useParams } from "next/navigation"
import { Suspense } from "react"
import ProductSkeleton from "@/src/components/skeletons/product-skeleton"

export default function TeeDetailsPage() {
  const params = useParams<{ teeSlug: string }>()
  const [tee] = useQuery(getProduct, { id: +params.teeSlug })

  return (
    <Suspense fallback={<ProductSkeleton />}>
      <ProductDetails
        productId={tee?.id}
        title={tee?.name}
        description={tee?.description}
        prices={tee?.prices}
        images={tee?.images}
      />
    </Suspense>
  )
}
