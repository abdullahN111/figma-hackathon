import Image from "next/image";

import ProductMainImage from "@/app/public/assets/images/main/ProductMainImage.png";
import ProductSideImage1 from "@/app/public/assets/images/products/ProductSideImage1.png";
import ProductSideImage2 from "@/app/public/assets/images/products/ProductSideImage2.png";
import ProductSideImage3 from "@/app/public/assets/images/products/ProductSideImage3.png";
import ProductSideImage4 from "@/app/public/assets/images/products/ProductSideImage4.png";

const ProductDetail = () => {
  return (
    <div className="w-full mx-auto py-8 mb-12 px-6 sm:px-10 md:px-12 lg:px-16 font-poppins flex flex-col lg:flex-row gap-10 md:gap-16">
      <div className="basis-[45%] flex flex-col lg:flex-row gap-6">
        <div className="flex flex-row lg:flex-col gap-3 sm:gap-5 md:gap-7">
          <Image
            src={ProductSideImage1}
            alt="product image"
            className="bg-[#F9F1E7] rounded-md max-w-[73px] w-auto"
          />
          <Image
            src={ProductSideImage2}
            alt="product image"
            className="bg-[#F9F1E7] rounded-md max-w-[73px] w-auto"
          />
          <Image
            src={ProductSideImage3}
            alt="product image"
            className="bg-[#F9F1E7] rounded-md max-w-[73px] w-auto"
          />
          <Image
            src={ProductSideImage4}
            alt="product image"
            className="bg-[#F9F1E7] rounded-md max-w-[73px] w-auto"
          />
        </div>
        <div>
          <div className="flex justify-center items-center bg-[#F9F1E7] rounded-md w-auto h-[500px]">
            <Image
              src={ProductMainImage}
              alt="product image"
              className="max-w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="basis-[55%]">
        <div className="flex flex-col gap-2 items-start">
          <h1 className="text-[40px]">Asgaard sofa</h1>
          <p className="text-[#9F9F9F] text-2xl">Rs. 250,000.00</p>
          <div className="flex items-center gap-5 my-1">
            <p className="text-[#FFC700] text-lg">★ ★ ★ ★ ★</p>
            <div className="h-[30px] w-px bg-[#9F9F9F]"></div>
            <p className="text-[13px] text-[#9F9F9F]">5 Customer Review</p>
          </div>
          <p className="text-[13px]">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
          <div className="flex flex-col gap-3">
            <p className="text-[#9F9F9F] text-sm">Size</p>
            <div className="flex gap-2">
              <div className="text-center content-center w-[28px] h-[28px] text-[13px] bg-[#B88E2F] text-white rounded-md">
                L
              </div>
              <div className="text-center content-center w-[28px] h-[28px] text-[13px] text-black bg-[#F9F1E7] rounded-md">
                XL
              </div>
              <div className="text-center content-center w-[28px] h-[28px] text-[13px] text-black bg-[#F9F1E7] rounded-md">
                XS
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-3">
              <p className="text-[#9F9F9F] text-sm">Color</p>
              <div className="flex gap-2">
                <div className="w-[28px] h-[28px] bg-[#816DFA] rounded-full"></div>
                <div className="w-[28px] h-[28px] bg-[#000000] rounded-full"></div>
                <div className="w-[28px] h-[28px] bg-[#B88E2F] rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-4 sm:gap-2 mt-6 items-start sm:items-center text-base">
            <div className="cursor-pointer hover:bg-[#F9F1E7] flex gap-6 mr-4 border border-[#9F9F9F] rounded-md py-2 px-3">
              <span className="text-[#]">-</span>
              <button>1</button>
              <span>+</span>
            </div>
            <div className="cursor-pointer hover:bg-[#F9F1E7] py-2 px-5 rounded-lg border border-black">
              <button>Add To Cart</button>
            </div>
            <div className="cursor-pointer hover:bg-[#F9F1E7] flex items-center gap-3 py-2 px-5 rounded-lg border border-black">
              <span>+</span>
              <button>Compare</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
