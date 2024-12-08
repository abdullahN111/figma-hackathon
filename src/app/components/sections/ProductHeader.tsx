import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const ProductHeader = () => {
  return (
    <div className="w-full px-8 sm:px-12 md:px-16 lg:px-20 h-24 bg-[#F9F1E7] font-poppins flex items-center gap-[12px] md:gap-[17px]">
      <p className="text-sm md:text-base text-[#9F9F9F]">Home</p>
      <IoIosArrowForward />
      <p className="text-sm md:text-base text-[#9F9F9F] ml-[5px] md:ml-2">Shop</p>
      <IoIosArrowForward />
      <div className="h-9 w-px bg-[#9F9F9F]"></div>
      <p className="text-sm md:text-base text-black">Asgaard sofa</p>
    </div>
  );
};

export default ProductHeader;
