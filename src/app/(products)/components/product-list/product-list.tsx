import ProductCard from "@/src/app/(products)/components/product-list/product-card"
import { ProductDetails } from "@/src/lib/types"

interface ClothesListProps {
  items: ProductDetails[]
}

export default function ProductList({ items }: ClothesListProps) {
  return (
    <div className="grid xl:grid-cols-3 grid-cols-1 gap-8">
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  )
}
