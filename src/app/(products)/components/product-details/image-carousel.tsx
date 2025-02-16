import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel"
import { Image as PrismaImage } from "@prisma/client"
import Image from "next/image"

interface ImageCarouselProps {
  title: string
  images: PrismaImage[]
}

export default function ImageCarousel({ title, images }: ImageCarouselProps) {
  return (
    <Carousel>
      <CarouselContent>
        {images?.map((image) => (
          <CarouselItem key={image.id}>
            <Image
              src={image.src}
              alt={title ?? "Image"}
              height={600}
              width={400}
              className="w-full"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
