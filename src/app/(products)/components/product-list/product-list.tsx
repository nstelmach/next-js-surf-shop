import ProductCard from "@/src/app/(products)/components/product-list/product-card"
import { Product } from "@prisma/client"
import Typography from "@/src/components/typography/typography"

interface ClothesListProps {
  title: string
  items: Product[]
}

export default function ProductList({ title, items }: ClothesListProps) {
  return (
    <>
      <Typography as="h1" variant="2xlarge" weight="bold" className="m-4">
        {title}
      </Typography>
      <div className="grid xl:grid-cols-3 grid-cols-1 gap-8">
        {items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </>
  )
}
