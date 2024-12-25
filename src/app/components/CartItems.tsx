import { ImCancelCircle } from "react-icons/im";
import { MdCancel } from "react-icons/md";
import image1 from "@/app/public/assets/images/products/ProductImage8.png";
import image2 from "@/app/public/assets/images/products/ProductImage7.png";

import Image from "next/image";



const CartItems = ({ closeCart }: { closeCart: () => void }) => {
  return (
    <div
      className="relative p-4 sm:p-6 w-[220px] h-[500px] sm:w-full max-w-[340px] bg-white shadow-lg z-[1001] rounded-es-md"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-5">
          <h3 className="text-xl sm:text-2xl font-semibold">Shopping Cart</h3>
          <div className="border border-[#D9D9D9] w-[110%] sm:w-[140%]"></div>
        </div>
        <button className="mt-2 cursor-pointer text-[#9F9F9F]" onClick={closeCart}>
          <ImCancelCircle />
        </button>
      </div>
  
      <div className="flex flex-col gap-8 sm:gap-5 my-7 h-[280px] overflow-y-auto">
        <div className="flex gap-2 sm:gap-0 flex-col sm:flex-row items-center justify-between">
          <div>
            <Image
              src={image1}
              alt="Asgaard Sofa"
              width={85}
              height={75}
              className="rounded-md"
            />
          </div>
          <div className="mx-0 text-center sm:text-start sm:mr-6">
            <p className="text-[15px] font-semibold">Asgaard sofa</p>
            <div>
              <p className="flex items-center gap-2">
                <span className="text-[15px]">1</span>
                <span className="text-base">&times;</span>
                <span className="text-xs text-[#B88E2F] font-semibold">
                  Rs. 250,000.00
                </span>
              </p>
            </div>
          </div>
          <div className="text-[#9F9F9F] cursor-pointer">
            <MdCancel />
          </div>
        </div>
        <div className="flex gap-2 sm:gap-0 flex-col sm:flex-row items-center justify-between">
          <div>
            <Image
              src={image2}
              alt="Casaliving Wood"
              width={85}
              height={75}
              className="rounded-md"
            />
          </div>
          <div className="mx-0 text-center sm:text-start sm:mr-6">
            <p className="text-[15px] font-semibold">Casaliving Wood</p>
            <div>
              <p className="flex items-center gap-2">
                <span className="text-[15px]">2</span>
                <span className="text-base">&times;</span>
                <span className="text-xs text-[#B88E2F] font-semibold">
                  Rs. 270,000.00
                </span>
              </p>
            </div>
          </div>
          <div className="text-[#9F9F9F] cursor-pointer">
            <MdCancel />
          </div>
        </div>
      
      </div>
 
      <div className="absolute bottom-0 w-full">
        <div className="flex mb-4 gap-4 sm:gap-0 items-center justify-between">
          <p className="text-[15px]">Subtotal</p>
          <p className="mr-0 sm:mr-16 text-[15px] text-[#B88E2F] font-semibold">
            Rs. 520,000.00
          </p>
        </div>
        <div className="border border-[#D9D9D9] w-full"></div>
        <div className="flex items-center justify-center gap-3 my-5 mr-8">
          <button className="cursor-pointer text-xs hover:bg-[#F9F1E7] py-1 px-5 rounded-full border border-black">
            Cart
          </button>
          <button className="cursor-pointer text-xs hover:bg-[#F9F1E7] py-1 px-6 rounded-full border border-black">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
