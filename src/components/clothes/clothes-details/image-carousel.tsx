import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Image from "next/image";
import {ItemImage} from "@/lib/types";

interface ImageCarouselProps {
    title: string | undefined;
    images: ItemImage[] | undefined;
}

export default function ImageCarousel({title, images}: ImageCarouselProps) {
    return <Carousel>
        <CarouselContent>
            {images?.map((image) => (
                <CarouselItem key={image.id}>
                    <Image
                        src={image.src}
                        alt={title ?? "Image"}
                        width={500}
                        className="w-full"
                    />
                </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
    </Carousel>
}