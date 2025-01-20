"use client"
import ClothesDetails from "@/src/components/clothes/clothes-details/clothes-details"
import { useQuery } from "@blitzjs/rpc"
import getProduct from "@/src/queries/getProduct"
import { useParams } from "next/navigation"

export default function TeeDetailsPage() {
  const params = useParams<{ teeSlug: string }>()

  const [tee] = useQuery(getProduct, { id: +params.teeSlug })

  //TODO auction price
  return (
    <ClothesDetails
      title={tee?.name}
      description={tee?.description}
      price={tee?.price}
      images={tee?.images}
      auctionPrice="50"
    />
  )
}
