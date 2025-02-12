"use client"
import ProductDetails from "@/src/app/(products)/components/product-details/product-details"
import { useQuery } from "@blitzjs/rpc"
import getProduct from "@/src/app/(products)/queries/get-product"
import { useParams } from "next/navigation"
import Loading from "@/src/app/loading"
import { Suspense } from "react"

export default function TeeDetailsPage() {
  const params = useParams<{ teeSlug: string }>()
  const [tee] = useQuery(getProduct, { id: +params.teeSlug })

  return (
    <Suspense fallback={<Loading />}>
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
