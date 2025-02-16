import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Product } from "@prisma/client"
import { getLink } from "@/src/lib/utils"

interface ClothesCardProps {
  item: Product
}

export default function ProductCard({ item }: ClothesCardProps) {
  const href = getLink(item.category, item.id)

  return (
    <Card>
      <Link href={href} className="flex justify-center items-center w-full">
        <Image
          src={item.images[0].src}
          alt={item.name}
          height={600}
          width={400}
          className="w-full"
        />
      </Link>
      <CardHeader>
        <Link href={href}>
          <CardTitle>{item.name}</CardTitle>
        </Link>
      </CardHeader>
      <CardContent>
        <CardDescription>{item.prices[0].price} €</CardDescription>
      </CardContent>
    </Card>
  )
}
