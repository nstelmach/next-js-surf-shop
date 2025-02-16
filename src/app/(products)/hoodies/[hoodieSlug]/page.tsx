"use client"
import ProductDetails from "@/src/app/(products)/components/product-details/product-details"
import { useQuery } from "@blitzjs/rpc"
import getProduct from "@/src/app/(products)/queries/get-product"
import { useParams } from "next/navigation"
import { Suspense } from "react"
import ProductSkeleton from "@/src/components/skeletons/product-skeleton"

export default function HoodieDetailsPage() {
  const params = useParams<{ hoodieSlug: string }>()
  const [hoodie] = useQuery(getProduct, { id: +params.hoodieSlug })

  return (
    <Suspense fallback={<ProductSkeleton />}>
      <ProductDetails
        productId={hoodie?.id}
        title={hoodie?.name}
        description={hoodie?.description}
        prices={hoodie?.prices}
        images={hoodie?.images}
      />
    </Suspense>
  )
}
