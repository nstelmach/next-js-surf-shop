import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card"
import ImageCarousel from "@/src/app/(products)/components/product-details/image-carousel"
import { Image, Price } from "@prisma/client"
import SizeSelectForm from "@/src/app/(products)/components/product-details/size-select-form"
import Typography from "@/src/components/typography/typography"

interface ClothesDetailsProps {
  title: string
  description: string
  prices: Price[]
  images: Image[]
  productId: number
}

export default function ProductDetails({
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
      <CardContent className="flex flex-col justify-center items-center gap-4 m-4">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <Typography as="p" variant="base">
          {prices[0].price} €
        </Typography>
      </CardContent>
      <CardFooter className="w-full">
        <SizeSelectForm productId={productId} />
      </CardFooter>
    </Card>
  )
}
