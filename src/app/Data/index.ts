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
  inventoryStatus: boolean;
  inventoryInStock: number;
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
    inventoryStatus: true,
    inventoryInStock: 8,
  },
  {
    id: 2,
    image: ProductImage2,
    name: "Leviosa",
    features: "Stylish cafe chair",
    price: "Rs 2,500.00",
    inventoryStatus: true,
    inventoryInStock: 5,
  },
  {
    id: 3,
    image: ProductImage3,
    badge: { text: "-50%", color: "#E97171" },
    name: "Lolito",
    features: "Stylish cafe chair",
    price: "Rs 7,000.00",
    oldPrice: "Rs 14,000.00",
    inventoryStatus: false,
    inventoryInStock: 0,
  },
  {
    id: 4,
    image: ProductImage4,
    badge: { text: "New", color: "#2EC1AC" },
    name: "Respira",
    features: "Outdoor bar table and stool",
    price: "Rs 5,000.00",
    inventoryStatus: true,
    inventoryInStock: 7,
  },
  {
    id: 5,
    image: ProductImage5,
    name: "Grifo",
    features: "Night lamp",
    price: "Rs 1,500.00",
    inventoryStatus: true,
    inventoryInStock: 3,
  },
  {
    id: 6,
    image: ProductImage6,
    badge: { text: "New", color: "#2EC1AC" },
    name: "Muggo",
    features: "Small mug",
    price: "Rs 500.00",
    inventoryStatus: true,
    inventoryInStock: 4,
  },
  {
    id: 7,
    image: ProductImage7,
    badge: { text: "-50%", color: "#E97171" },
    name: "Pinkgy",
    features: "Cute bed set",
    price: "Rs 7,000.00",
    oldPrice: "Rs 14,000.00",
    inventoryStatus: false,
    inventoryInStock: 0,
  },
  {
    id: 8,
    image: ProductImage8,
    badge: { text: "New", color: "#2EC1AC" },
    name: "Potty",
    features: "Minimalist flower pot",
    price: "Rs 500.00",
    inventoryStatus: true,
    inventoryInStock: 6,
  },
];




// // Your provided ProductCardData interface
// export interface ProductCardData {
//   id: number;
//   image: StaticImageData;  // This will handle both StaticImageData (Next.js images) and strings (URLs)
//   badge?: {
//     text: string;
//     color: string;
//   };
//   name: string;
//   features: string;
//   price: string;
//   oldPrice?: string;
//   inventoryStatus: boolean;
//   inventoryInStock: number;
// }


// export const fetchProductData = async (): Promise<ProductCardData[]> => {
//   try {
//     const url = 'https://getrit-furniture-store.p.rapidapi.com/API/Token?Token=Demo'; 
//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'x-rapidapi-key': process.env.API_KEY ||,   
//         'x-rapidapi-host': process.env.HOST ||  
//       }
//     });

//     if (!response.ok) {
//       throw new Error("Failed to fetch products from RapidAPI");
//     }

//     const data = await response.json();

//     // Map the response data to fit the ProductCardData structure
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const products: ProductCardData[] = data.map((item: any) => ({
//       id: item.id,
//       image: item.image,  // Make sure the image is returned as either a URL or StaticImageData
//       badge: item.badge ? { text: item.badge.text, color: item.badge.color } : undefined,
//       name: item.name,
//       features: item.features,
//       price: item.price,
//       oldPrice: item.oldPrice,
//       inventoryStatus: item.inventoryStatus,
//       inventoryInStock: item.inventoryInStock,
//     }));

//     return products;
//   } catch (error) {
//     console.error("Error fetching product data:", error);
//     return [];  // Return an empty array in case of error
//   }
// };
