import { StaticImageData } from "next/image";

import ProductImage1 from "@/app/public/assets/images/products/ProductImage1.png";
import ProductImage2 from "@/app/public/assets/images/products/ProductImage2.png";
import ProductImage3 from "@/app/public/assets/images/products/ProductImage3.png";
import ProductImage4 from "@/app/public/assets/images/products/ProductImage4.png";
import ProductImage5 from "@/app/public/assets/images/products/ProductImage5.png";
import ProductImage6 from "@/app/public/assets/images/products/ProductImage6.png";
import ProductImage7 from "@/app/public/assets/images/products/ProductImage7.png";
import ProductImage8 from "@/app/public/assets/images/products/ProductImage8.png";


export interface ProductCartInfo {
  id: number;
  sideImages: StaticImageData[];
  mainImage: StaticImageData;
  name: string;
  price: string;
  stars: string[];
  reviews: string;
  description: string;
}

export const productCardInfo: ProductCartInfo[] = [
  {
    id: 1,
    sideImages: [ProductImage1, ProductImage1, ProductImage1, ProductImage1],
    mainImage: ProductImage1,
    name: "Syltherine",
    price: "2500",
    stars: ["★", "★", "★", "★"],
    reviews: "7 Customer Review",
    description:
      "Setting the bar as one of the most stylish chairs in its class, the Syltherine is a sleek, modern masterpiece with a sturdy design that offers exceptional comfort and elegance for any cafe setting.",
  },
  {
    id: 2,
    sideImages: [ProductImage2, ProductImage2, ProductImage2, ProductImage2],
    mainImage: ProductImage2,
    name: "Leviosa",
    price: "2500",
    stars: ["★", "★", "★"],
    reviews: "4 Customer Review",
    description:
      "Setting the bar as one of the most stylish chairs in its class, modern masterpiece with a sturdy design that offers exceptional comfort and elegance for any cafe setting.",
  },
  {
    id: 3,
    sideImages: [ProductImage3, ProductImage3, ProductImage3, ProductImage3],
    mainImage: ProductImage3,
    name: "Lolito",
    price: "7000",
    stars: ["★", "★", "★", "★", "★"],
    reviews: "3 Customer Review",
    description:
      "Setting the bar as one of the most luxurious sofas in its class, the Lolito is a refined, modern centerpiece with plush cushioning and a sleek design that offers unmatched comfort and sophistication for any living space.",
  },
  {
    id: 4,
    sideImages: [ProductImage4, ProductImage4, ProductImage4, ProductImage4],
    mainImage: ProductImage4,
    name: "Respira",
    price: "5000",
    stars: ["★", "★", "★", "★"],
    reviews: "9 Customer Review",
    description:
      "Setting the bar as one of the most versatile sets in its class, the Respira is a chic, durable design with weather-resistant materials that offer a perfect blend of style and functionality for any outdoor setting.",
  },
  {
    id: 5,
    sideImages: [ProductImage5, ProductImage5, ProductImage5, ProductImage5],
    mainImage: ProductImage5,
    name: "Grifo",
    price: "1500",
    stars: ["★", "★", "★", "★"],
    reviews: "10 Customer Review",
    description:
      "Setting the bar as one of the most elegant lamps in its class, the Grifo is a minimalist, ambient light with a sleek design that offers a warm glow and timeless charm for any nighttime setting.",
  },
  {
    id: 6,
    sideImages: [ProductImage6, ProductImage6, ProductImage6, ProductImage6],
    mainImage: ProductImage6,
    name: "Muggo",
    price: "500",
    stars: ["★", "★", "★"],
    reviews: "6 Customer Review",
    description:
      "Setting the bar as one of the most charming mugs in its class, the Muggo is a compact, stylish design with an ergonomic handle and durable build that offers a delightful experience for any beverage.",
  },
  {
    id: 7,
    sideImages: [ProductImage7, ProductImage7, ProductImage7, ProductImage7],
    mainImage: ProductImage7,
    name: "Pinkgy",
    price: "7000",
    stars: ["★", "★", "★", "★", "★"],
    reviews: "8 Customer Review",
    description:
      "Setting the bar as one of the most adorable bed sets in its class, the Pinkgy is a cozy, vibrant design with soft fabrics and charming patterns that offer comfort and a playful touch to any bedroom.",
  },
  {
    id: 8,
    sideImages: [ProductImage8, ProductImage8, ProductImage8, ProductImage8],
    mainImage: ProductImage8,
    name: "Potty",
    price: "500",
    stars: ["★", "★", "★"],
    reviews: "3 Customer Review",
    description:
      "Setting the bar as one of the most elegant pots in its class, the Potty is a sleek, modern design with clean lines and durable materials that offer a perfect home for plants in any minimalist space.",
  },
];
