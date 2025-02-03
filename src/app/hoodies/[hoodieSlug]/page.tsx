"use client"
import ClothesDetails from "@/src/components/clothes/clothes-details/clothes-details"
import { useQuery } from "@blitzjs/rpc"
import getProduct from "@/src/queries/getProduct"
import { useParams } from "next/navigation"

export default function HoodieDetailsPage() {
  const params = useParams<{ hoodieSlug: string }>()

  const [hoodie] = useQuery(getProduct, { id: +params.hoodieSlug })

  //TODO auction price
  return (
    <ClothesDetails
      productId={hoodie?.id}
      title={hoodie?.name}
      description={hoodie?.description}
      prices={hoodie?.prices}
      images={hoodie?.images}
      auctionPrice="50"
    />
  )
}
