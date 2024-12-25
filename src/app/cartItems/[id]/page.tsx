// 'use client';

// import { ImCancelCircle } from "react-icons/im";
// import { MdCancel } from "react-icons/md";
// import Image from "next/image";
// import Link from "next/link";
// import { productCardInfo } from "@/app/Data/product";
// import { useParams, useSearchParams } from "next/navigation";

// const CartItems = ({ closeCart }: { closeCart: () => void }) => {
//   const { id } = useParams<{ id: string }>();
//   const searchParams = useSearchParams();
//   const quantity = parseInt(searchParams.get("quantity") || "1", 10);
  
//   const item = productCardInfo.find((item) => item.id === parseInt(id));
//   if (!item) {
//     return (
//       <div className="text-center mt-10">
//         <p>Item not found. Please check the URL.</p>
//         <Link href="/shop" className="text-blue-500 underline">
//           Go back to item
//         </Link>
//       </div>
//     );
//   }

//   const subtotal = Number(item.price) * quantity;

//   return (
//     <div
//       className="relative p-4 sm:p-6 w-[220px] h-[500px] sm:w-full max-w-[340px] bg-white shadow-lg z-[1001] rounded-es-md"
//       onClick={(e) => e.stopPropagation()}
//     >
//       <div className="flex items-start justify-between">
//         <div className="flex flex-col gap-5">
//           <h3 className="text-xl sm:text-2xl font-semibold">Shopping Cart</h3>
//           <div className="border border-[#D9D9D9] w-[110%] sm:w-[140%]"></div>
//         </div>
//         <button className="mt-2 cursor-pointer text-[#9F9F9F]" onClick={closeCart}>
//           <ImCancelCircle />
//         </button>
//       </div>

//       <div className="flex flex-col gap-8 sm:gap-5 my-7 h-[280px] overflow-y-auto">
//         <div className="flex gap-2 sm:gap-0 flex-col sm:flex-row items-center justify-between">
//           <div>
//             <Image src={item.mainImage} alt={item.name} width={85} height={75} className="rounded-md" />
//           </div>
//           <div className="mx-0 text-center sm:text-start sm:mr-6">
//             <p className="text-[15px] font-semibold">{item.name}</p>
//             <p className="flex items-center gap-2">
//               <span className="text-[15px]">{quantity}</span>
//               <span className="text-base">&times;</span>
//               <span className="text-xs text-[#B88E2F] font-semibold">
//                 {subtotal}.00
//               </span>
//             </p>
//           </div>
//           <div className="text-[#9F9F9F] cursor-pointer">
//             <MdCancel />
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-0 w-full">
//         <div className="flex mb-4 gap-4 sm:gap-0 items-center justify-between">
//           <p className="text-[15px]">Subtotal</p>
//           <p className="mr-0 sm:mr-16 text-[15px] text-[#B88E2F] font-semibold">
//             {subtotal}.00
//           </p>
//         </div>
//         <div className="border border-[#D9D9D9] w-full"></div>
//         <div className="flex items-center justify-center gap-3 my-5 mr-8">
//           <button className="cursor-pointer text-xs hover:bg-[#F9F1E7] py-1 px-5 rounded-full border border-black">
//             Cart
//           </button>
//           <button className="cursor-pointer text-xs hover:bg-[#F9F1E7] py-1 px-6 rounded-full border border-black">
//             Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItems;
