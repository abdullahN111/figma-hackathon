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
  sideImages: StaticImageData[];
  badge?: {
    text: string;
    color: string;
  };
  name: string;
  features: string;
  price: string;
  oldPrice?: string;
  stars: string[];
  reviews: string;
  description: string;
  inventoryStatus: boolean;
  inventoryInStock: number;
}

export const ProductCardData: ProductCardData[] = [
  {
    id: 1,
    image: ProductImage1,
    sideImages: [ProductImage1, ProductImage1, ProductImage1, ProductImage1],
    badge: { text: "-30%", color: "#E97171" },
    name: "Syltherine",
    features: "Stylish cafe chair",
    price: "2,500.00",
    oldPrice: "Rs 3,500.00",
    stars: ["★", "★", "★", "★"],
    reviews: "7 Customer Review",
    description:
      "Setting the bar as one of the most stylish chairs in its class, the Syltherine is a sleek, modern masterpiece with a sturdy design that offers exceptional comfort and elegance for any cafe setting.",
    inventoryStatus: true,
    inventoryInStock: 9,
  },
  {
    id: 2,
    image: ProductImage2,
    sideImages: [ProductImage2, ProductImage2, ProductImage2, ProductImage2],
    name: "Leviosa",
    features: "Stylish cafe chair",
    price: "2,500.00",
    stars: ["★", "★", "★"],
    reviews: "4 Customer Review",
    description:
      "Setting the bar as one of the most stylish chairs in its class, modern masterpiece with a sturdy design that offers exceptional comfort and elegance for any cafe setting.",
    inventoryStatus: true,
    inventoryInStock: 6,
  },
  {
    id: 3,
    image: ProductImage3,
    sideImages: [ProductImage3, ProductImage3, ProductImage3, ProductImage3],
    badge: { text: "-50%", color: "#E97171" },
    name: "Lolito",
    features: "Stylish cafe chair",
    price: "7,000.00",
    oldPrice: "14,000.00",
    stars: ["★", "★", "★", "★", "★"],
    reviews: "3 Customer Review",
    description:
      "Setting the bar as one of the most luxurious sofas in its class, the Lolito is a refined, modern centerpiece with plush cushioning and a sleek design that offers unmatched comfort and sophistication for any living space.",
    inventoryStatus: false,
    inventoryInStock: 0,
  },
  {
    id: 4,
    image: ProductImage4,
    sideImages: [ProductImage4, ProductImage4, ProductImage4, ProductImage4],
    badge: { text: "New", color: "#2EC1AC" },
    name: "Respira",
    features: "Outdoor bar table and stool",
    price: "5,000.00",
    stars: ["★", "★", "★", "★"],
    reviews: "9 Customer Review",
    description:
      "Setting the bar as one of the most versatile sets in its class, the Respira is a chic, durable design with weather-resistant materials that offer a perfect blend of style and functionality for any outdoor setting.",
    inventoryStatus: true,
    inventoryInStock: 25,
  },
  {
    id: 5,
    image: ProductImage5,
    sideImages: [ProductImage5, ProductImage5, ProductImage5, ProductImage5],
    name: "Grifo",
    features: "Night lamp",
    price: "1,500.00",
    stars: ["★", "★", "★", "★"],
    reviews: "10 Customer Review",
    description:
      "Setting the bar as one of the most elegant lamps in its class, the Grifo is a minimalist, ambient light with a sleek design that offers a warm glow and timeless charm for any nighttime setting.",
    inventoryStatus: true,
    inventoryInStock: 7,
  },
  {
    id: 6,
    image: ProductImage6,
    sideImages: [ProductImage6, ProductImage6, ProductImage6, ProductImage6],
    badge: { text: "New", color: "#2EC1AC" },
    name: "Muggo",
    features: "Small mug",
    price: "500.00",
    stars: ["★", "★", "★"],
    reviews: "6 Customer Review",
    description:
      "Setting the bar as one of the most charming mugs in its class, the Muggo is a compact, stylish design with an ergonomic handle and durable build that offers a delightful experience for any beverage.",
    inventoryStatus: true,
    inventoryInStock: 28,
  },
  {
    id: 7,
    image: ProductImage7,
    sideImages: [ProductImage7, ProductImage7, ProductImage7, ProductImage7],
    badge: { text: "-50%", color: "#E97171" },
    name: "Pinkgy",
    features: "Cute bed set",
    price: "7,000.00",
    oldPrice: "14,000.00",
    stars: ["★", "★", "★", "★", "★"],
    reviews: "8 Customer Review",
    description:
      "Setting the bar as one of the most adorable bed sets in its class, the Pinkgy is a cozy, vibrant design with soft fabrics and charming patterns that offer comfort and a playful touch to any bedroom.",
    inventoryStatus: false,
    inventoryInStock: 0,
  },
  {
    id: 8,
    image: ProductImage8,
    sideImages: [ProductImage8, ProductImage8, ProductImage8, ProductImage8],
    badge: { text: "New", color: "#2EC1AC" },
    name: "Potty",
    features: "Minimalist flower pot",
    price: "500.00",
    stars: ["★", "★", "★"],
    reviews: "3 Customer Review",
    description:
      "Setting the bar as one of the most elegant pots in its class, the Potty is a sleek, modern design with clean lines and durable materials that offer a perfect home for plants in any minimalist space.",
    inventoryStatus: true,
    inventoryInStock: 16,
  },
];
