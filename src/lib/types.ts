import { StaticImageData } from "next/image";

export interface ItemImage {
  id: string;
  src: StaticImageData;
}

export interface Clothes {
  id: string;
  name: string;
  images: ItemImage[];
  price: string;
  description: string;
  bestseller: boolean;
}
