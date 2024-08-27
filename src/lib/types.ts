import { StaticImageData } from "next/image";

export interface Clothes {
  id: string;
  name: string;
  images: StaticImageData[];
  price: string;
  description: string;
  bestseller: boolean;
}
