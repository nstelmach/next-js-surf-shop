import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clothes } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

interface ClothesListProps {
  title: string;
  items: Clothes[];
}

export default function ClothesList({ title, items }: ClothesListProps) {
  return (
    <div>
      <p>{title}</p>
      <div className="grid grid-cols-3 gap-4">
        {items.map((item) => {
          return (
            <Card key={item.id}>
              <CardHeader>
                <Link href="">
                  <Image src={item.images[0]} alt={item.name} width={200} />
                </Link>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>{item.price} €</CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
