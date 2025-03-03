"use client"
import { useParams } from "next/navigation"
import { useQuery } from "@blitzjs/rpc"
import getProduct from "@/src/app/(products)/queries/get-product"
import ProductDetails from "@/src/app/(products)/components/product-details/product-details"

export default function LongsleeveWrapper() {
  const params = useParams<{ longsleeveSlug: string }>()
  const [longsleeve] = useQuery(getProduct, { id: +params.longsleeveSlug })

  return (
    <>
      {longsleeve && (
        <ProductDetails
          productId={longsleeve.id}
          title={longsleeve.name}
          description={longsleeve.description}
          prices={longsleeve.prices}
          images={longsleeve.images}
        />
      )}
    </>
  )
}
