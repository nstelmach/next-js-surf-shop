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
import Flex from "@/src/components/typohgraphy/flex"
import Paragraph from "@/src/components/typohgraphy/paragraph"
import { Price } from "@prisma/client"
import SizeSelectForm from "@/src/components/clothes/clothes-details/size-select-form"

interface ClothesDetailsProps {
  title: string | undefined
  description: string | undefined
  prices: Price[] | undefined
  images: ItemImage[] | undefined
  productId: number | undefined
}

//TODO price
export default function ClothesDetails({
  title,
  description,
  prices,
  images,
  productId,
}: ClothesDetailsProps) {
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
      </CardContent>
      <CardFooter className="w-full">
        <SizeSelectForm productId={productId} />
      </CardFooter>
    </Card>
  )
}
