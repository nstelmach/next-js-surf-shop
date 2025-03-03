import { Card, CardContent, CardDescription, CardTitle } from "@/src/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { getLink } from "@/src/lib/utils"
import { ProductDetails } from "@/src/lib/types"

interface ClothesCardProps {
  item: ProductDetails
}

export default function ProductCard({ item }: ClothesCardProps) {
  const href = getLink(item.category, item.id)

  return (
    <Card className="lg:w-[400px]">
      <Link href={href} className="flex justify-center items-center w-full">
        <Image
          src={item.images[0].src}
          alt={item.name}
          height={600}
          width={400}
          className="w-full"
        />
      </Link>
      <CardContent>
        <Link href={href}>
          <CardTitle>{item.name}</CardTitle>
        </Link>
        <CardDescription>{+item.prices[0].price} €</CardDescription>
      </CardContent>
    </Card>
  )
}
