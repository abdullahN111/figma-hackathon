import { ProductCardData } from "@/app/Data/index";
import Image from "next/image";

import { IoShareSocialOutline } from "react-icons/io5";
import { TbArrowsExchange2 } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";

const OurProducts = () => {
  return (
    <section className="max-w-[1200px] mx-auto font-poppins my-16 flex flex-col justify-center">
      <h2 className="text-4xl font-bold text-[#3A3A3A] text-center">
        Our Products
      </h2>
      <div className="flex flex-col justify-center items-center sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 sm:gap-8 my-6 mx-4 lg:mx-6">
        {ProductCardData.map((card) => {
          return (
            <div
              key={card.id}
              className="relative flex flex-col w-[250px] sm:w-auto h-[350px] bg-[#F4F5F7] rounded-sm shadow-md overflow-hidden sm:mx-10 md:mx-2 lg:mx-0 transition-transform duration-300 hover:scale-105 cursor-pointer group"
            >
              <div className="relative w-full h-0 pb-[75%]">
                <Image
                  src={card.image}
                  alt={card.name}
                  layout="fill"
                  objectFit="cover"
                  sizes="100vw"
                />
                {card.badge && (
                  <div
                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-sm text-white rounded-full"
                    style={{
                      backgroundColor: card.badge.color,
                    }}
                  >
                    {card.badge.text}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2 p-4">
                <h4 className="text-2xl font-semibold text-[#3A3A3A]">
                  {card.name}
                </h4>
                <p className="text-base text-[#898989]">{card.features}</p>
                <h5 className="text-xl font-semibold text-[#3A3A3A]">
                  {card.price}{" "}
                  {card.oldPrice && (
                    <span className="text-base text-[#B0B0B0] line-through font-normal">
                      {card.oldPrice}
                    </span>
                  )}
                </h5>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link href={"/add-to-cart"}>
                  <button className="text-[#B88E2F] bg-white text-sm font-semibold py-2 px-8 rounded-sm hover:bg-[#96741E] hover:text-white transition duration-300">
                    Add to Cart
                  </button>
                </Link>
                <div className="flex gap-4">
                  <button className="text-white flex items-center gap-[2px] hover:text-[#B88E2F] transition duration-300 text-sm">
                    <span>
                      <IoShareSocialOutline />
                    </span>{" "}
                    Share
                  </button>
                  <button className="text-white flex items-center gap-[2px] hover:text-[#B88E2F] transition duration-300 text-sm">
                    <span>
                      <TbArrowsExchange2 />
                    </span>{" "}
                    Compare
                  </button>
                  <button className="text-white flex items-center gap-[2px] hover:text-[#B88E2F] transition duration-300 text-sm">
                    <span>
                      <FaRegHeart />
                    </span>{" "}
                    Like
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="border mx-auto rounded-sm border-[#B88E2F] text-[#B88E2F] text-base font-semibold py-2 px-10 mt-8 sm:mt-4 md:mt-2 hover:text-white hover:bg-[#B88E2F] transition duration-300 py">
        Show More
      </button>
    </section>
  );
};

export default OurProducts;
