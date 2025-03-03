"use client"
import { useParams } from "next/navigation"
import { useQuery } from "@blitzjs/rpc"
import getProduct from "@/src/app/(products)/queries/get-product"
import ProductDetails from "@/src/app/(products)/components/product-details/product-details"

export default function HoodieWrapper() {
  const params = useParams<{ hoodieSlug: string }>()
  const [hoodie] = useQuery(getProduct, { id: +params.hoodieSlug })

  return (
    <>
      {hoodie && (
        <ProductDetails
          productId={hoodie.id}
          title={hoodie.name}
          description={hoodie.description}
          prices={hoodie.prices}
          images={hoodie.images}
        />
      )}
    </>
  )
}
