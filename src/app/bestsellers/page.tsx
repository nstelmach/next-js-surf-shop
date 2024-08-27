import ClothesList from "@/components/clothes/clothes-list/clothes-list";
import { HOODIES, LONGSLEEVES, TEES } from "@/lib/constants";
import { Clothes } from "@/lib/types";

export default function Bestsellers() {
  const BESTSELLERS: Clothes[] = [
    ...TEES.filter((item) => item.bestseller),
    ...HOODIES.filter((item) => item.bestseller),
    ...LONGSLEEVES.filter((item) => item.bestseller),
  ];

  return <ClothesList title="BESTSELLERS" items={BESTSELLERS} />;
}
