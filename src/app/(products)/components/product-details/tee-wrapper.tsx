"use client"
import { useParams } from "next/navigation"
import { useQuery } from "@blitzjs/rpc"
import getProduct from "@/src/app/(products)/queries/get-product"
import ProductDetails from "@/src/app/(products)/components/product-details/product-details"

export default function TeeWrapper() {
  const params = useParams<{ teeSlug: string }>()
  const [tee] = useQuery(getProduct, { id: +params.teeSlug })

  return (
    <ProductDetails
      productId={tee?.id}
      title={tee?.name}
      description={tee?.description}
      prices={tee?.prices}
      images={tee?.images}
    />
  )
}
