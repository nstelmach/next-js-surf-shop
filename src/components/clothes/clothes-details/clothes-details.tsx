"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card"
import { ItemImage } from "@/types"
import ImageCarousel from "@/src/components/clothes/clothes-details/image-carousel"
import SizeSelect from "@/src/components/clothes/clothes-details/size-select"
import PurchaseTabs from "@/src/components/clothes/clothes-details/purchase-tabs"
import Flex from "@/src/components/typohgraphy/flex"
import Paragraph from "@/src/components/typohgraphy/paragraph"
import { Price } from "@prisma/client"
import { useState } from "react"

interface ClothesDetailsProps {
  title: string | undefined
  description: string | undefined
  prices: Price[] | undefined
  images: ItemImage[] | undefined
  auctionPrice: string | undefined
  productId: number | undefined
}

//TODO price
export default function ClothesDetails({
  title,
  description,
  prices,
  images,
  auctionPrice,
  productId,
}: ClothesDetailsProps) {
  const [size, setSize] = useState("")

  return (
    <Card className="max-w-xs md:max-w-lg xl:max-w-xl">
      <CardHeader>
        <ImageCarousel title={title} images={images} />
      </CardHeader>
      <CardContent className="flex flex-col justify-center items-center">
        <Flex className="m-4 flex-col justify-center items-center gap-4">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <Paragraph className="xl:text-base text-xl md:text-2xl">{prices[0].price} €</Paragraph>
        </Flex>
        <Flex className="w-full p-2 xl:max-w-xs">
          <SizeSelect setSize={setSize} />
        </Flex>
      </CardContent>
      <CardFooter className="w-full">
        <PurchaseTabs size={size} productId={productId} auctionPrice={auctionPrice} />
      </CardFooter>
    </Card>
  )
}
