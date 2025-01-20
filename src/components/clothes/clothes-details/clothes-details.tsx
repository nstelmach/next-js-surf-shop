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

interface ClothesDetailsProps {
  title: string | undefined
  description: string | undefined
  price: string | undefined
  images: ItemImage[] | undefined
  auctionPrice: string | undefined
}

//TODO price
export default function ClothesDetails({
  title,
  description,
  price,
  images,
  auctionPrice,
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
          <Paragraph className="xl:text-base text-xl md:text-2xl">{price[0].price} €</Paragraph>
        </Flex>
        <Flex className="w-full p-2 xl:max-w-xs">
          <SizeSelect />
        </Flex>
      </CardContent>
      <CardFooter className="w-full">
        <PurchaseTabs auctionPrice={auctionPrice} />
      </CardFooter>
    </Card>
  )
}
