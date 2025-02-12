import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Product } from "@prisma/client"

interface ClothesCardProps {
  item: Product
}

export default function ProductCard({ item }: ClothesCardProps) {
  return (
    <Card>
      <Link
        // TODO create function for this createProductLink(category, id)
        href={`/${item.category}/${item.id}`}
        className="flex justify-center items-center w-full"
      >
        <Image
          src={item.images[0].src}
          alt={item.name}
          height={600}
          width={200}
          className="w-full"
        />
      </Link>
      <CardHeader>
        <Link href={`/${item.category}/${item.id}`}>
          <CardTitle>{item.name}</CardTitle>
        </Link>
      </CardHeader>
      <CardContent>
        <CardDescription>{item.prices[0].price} €</CardDescription>
      </CardContent>
    </Card>
  )
}
