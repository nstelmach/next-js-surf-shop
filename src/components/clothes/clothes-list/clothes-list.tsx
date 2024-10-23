import {Clothes} from "@/lib/types";
import ClothesCard from "@/components/clothes/clothes-list/clothes-card";
import Paragraph from "@/components/typohgraphy/paragraph";

interface ClothesListProps {
    title: string;
    items: Clothes[];
}

export default function ClothesList({title, items}: ClothesListProps) {
    return <>
        <Paragraph className="text-3xl md:text-4xl xl:text-2xl font-bold m-4">{title}</Paragraph>
        <div className="grid xl:grid-cols-3 grid-cols-1 gap-8">
            {items.map((item) => (<ClothesCard key={item.id} item={item}/>
            ))}
        </div>
    </>
}
