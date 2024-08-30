import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ItemImage } from "@/lib/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Image from "next/image";

interface ClothesDetailsProps {
  title: string | undefined;
  description: string | undefined;
  price: string | undefined;
  images: ItemImage[] | undefined;
  auctionPrice: string | undefined;
}

export default function ClothesDetails({
  title,
  description,
  price,
  images,
  auctionPrice,
}: ClothesDetailsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Carousel>
          <CarouselContent>
            {images?.map((image) => (
              <CarouselItem key={image.id}>
                <Image
                  src={image.src}
                  alt={title ?? "Image"}
                  width={300}
                ></Image>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <CardDescription>{description}</CardDescription>
        <p>{price} €</p>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Choose a size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="xs">XS</SelectItem>
            <SelectItem value="s">S</SelectItem>
            <SelectItem value="m">M</SelectItem>
            <SelectItem value="l">L</SelectItem>
            <SelectItem value="xl">XL</SelectItem>
          </SelectContent>
        </Select>
      </CardContent>
      <CardFooter>
        <Tabs defaultValue="buy">
          <TabsList>
            <TabsTrigger value="buy">Buy Now</TabsTrigger>
            <TabsTrigger value="bid">Bid</TabsTrigger>
          </TabsList>
          <TabsContent value="buy">
            <Button>Add to cart</Button>
          </TabsContent>
          <TabsContent value="bid">
            <p>{auctionPrice}</p>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="price">Your Price</Label>
              <Input type="text" id="price" placeholder="Price" />
              <Button type="submit">Bid</Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardFooter>
    </Card>
  );
}
