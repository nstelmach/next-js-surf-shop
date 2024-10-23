import {StaticImageData} from "next/image";

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
    category: string;
}

export interface RadioGroupCartItem {
    label: string;
    id: string;
    price?: number;
}

export interface CartItem {
    id: string;
    name: string;
    image: StaticImageData;
    size: string;
    quantity: number;
    price: number;
    category: string;
}