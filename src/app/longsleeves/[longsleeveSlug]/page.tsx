"use client"
import ClothesDetails from "@/src/components/clothes/clothes-details/clothes-details"
import { useQuery } from "@blitzjs/rpc"
import getProduct from "@/src/queries/getProduct"
import { useParams } from "next/navigation"

export default function LongsleeveDetailsPage() {
  const params = useParams<{ longsleeveSlug: string }>()

  const [longsleeve] = useQuery(getProduct, { id: +params.longsleeveSlug })

  //TODO auction price
  return (
    <ClothesDetails
      productId={longsleeve.id}
      title={longsleeve?.name}
      description={longsleeve?.description}
      prices={longsleeve?.prices}
      images={longsleeve?.images}
      auctionPrice="50"
    />
  )
}
