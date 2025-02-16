import { Card, CardContent, CardDescription, CardTitle } from "@/src/components/ui/card"
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
    <Card className="flex flex-col md:flex-row gap-16">
      <ImageCarousel title={title} images={images} />
      <CardContent className="flex flex-col justify-center items-center gap-2 px-4">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="m-2">{description}</CardDescription>
        <Typography as="p" variant="base">
          {prices[0].price} €
        </Typography>
        <SizeSelectForm productId={productId} />
      </CardContent>
    </Card>
  )
}
