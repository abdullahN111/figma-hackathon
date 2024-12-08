import { StaticImageData } from "next/image";

import ProductImage1 from "@/app/public/assets/images/products/ProductImage1.png";
import ProductImage2 from "@/app/public/assets/images/products/ProductImage2.png";
import ProductImage3 from "@/app/public/assets/images/products/ProductImage3.png";
import ProductImage4 from "@/app/public/assets/images/products/ProductImage4.png";
import ProductImage5 from "@/app/public/assets/images/products/ProductImage5.png";
import ProductImage6 from "@/app/public/assets/images/products/ProductImage6.png";
import ProductImage7 from "@/app/public/assets/images/products/ProductImage7.png";
import ProductImage8 from "@/app/public/assets/images/products/ProductImage8.png";

export interface ProductCardData {
  id: number;
  image: StaticImageData;
  badge?: {
    text: string;
    color: string;
  };
  name: string;
  features: string;
  price: string;
  oldPrice?: string;
}

export const ProductCardData: ProductCardData[] = [
  {
    id: 1,
    image: ProductImage1,
    badge: { text: "-30%", color: "#E97171" },
    name: "Syltherine",
    features: "Stylish cafe chair",
    price: "Rs 2,500.00",
    oldPrice: "Rs 3,500.00",
  },
  {
    id: 2,
    image: ProductImage2,
    name: "Leviosa",
    features: "Stylish cafe chair",
    price: "Rs 2,500.00",
  },
  {
    id: 3,
    image: ProductImage3,
    badge: { text: "-50%", color: "#E97171" },
    name: "Lolito",
    features: "Stylish cafe chair",
    price: "Rs 7,000.00",
    oldPrice: "Rs 14,000.00",
  },
  {
    id: 4,
    image: ProductImage4,
    badge: { text: "New", color: "#2EC1AC" },
    name: "Respira",
    features: "Outdoor bar table and stool",
    price: "Rs 5,000.00",
  },
  {
    id: 5,
    image: ProductImage5,
    name: "Grifo",
    features: "Night lamp",
    price: "Rs 1,500.00",
  },
  {
    id: 6,
    image: ProductImage6,
    badge: { text: "New", color: "#2EC1AC" },
    name: "Muggo",
    features: "Small mug",
    price: "Rs 500.00",
  },
  {
    id: 7,
    image: ProductImage7,
    badge: { text: "-50%", color: "#E97171" },
    name: "Pinkgy",
    features: "Cute bed set",
    price: "Rs 7,000.00",
    oldPrice: "Rs 14,000.00",
  },
  {
    id: 8,
    image: ProductImage8,
    badge: { text: "New", color: "#2EC1AC" },
    name: "Potty",
    features: "Minimalist flower pot",
    price: "Rs 500.00",
  },
];
