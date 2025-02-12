import ProductCard from "@/src/app/(products)/components/product-list/product-card"
import Paragraph from "@/src/components/typography/paragraph"
import { Product } from "@prisma/client"

interface ClothesListProps {
  title: string
  items: Product[]
}

export default function ProductList({ title, items }: ClothesListProps) {
  return (
    <>
      <Paragraph className="text-3xl md:text-4xl xl:text-2xl font-bold m-4">{title}</Paragraph>
      <div className="grid xl:grid-cols-3 grid-cols-1 gap-8">
        {items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </>
  )
}
