"use client";

import { ProductCardData } from "@/app/Data/index";
import Image from "next/image";

import RangeCard from "@/app/components/cards/RangeCard";
import RangeImage1 from "@/app/public/assets/images/products/RangeImage1.png";
import RangeImage2 from "@/app/public/assets/images/products/RangeImage2.png";
import RangeImage3 from "@/app/public/assets/images/products/RangeImage3.png";
import ExploreImage1 from "@/app/public/assets/images/products/ExploreImage1.png";
import ExploreImage2 from "@/app/public/assets/images/products/ExploreImage2.png";
import ExploreImage3 from "@/app/public/assets/images/products/ExploreImage3.png";

import { IoShareSocialOutline } from "react-icons/io5";
import { TbArrowsExchange2 } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const Products = () => {
  const images = [
    { src: ExploreImage1, title: "01 — Bed Room", subtitle: "Inner Peace" },
    { src: ExploreImage2, title: "02 — Living Room", subtitle: "Relaxation" },
    { src: ExploreImage3, title: "03 — Dining Room", subtitle: "Cozy Vibes" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="my-6">
      {/* Range Section */}
      <section className="max-w-[1140px] mx-auto font-poppins my-16">
        <div className="flex flex-col items-center justify-center gap-1 mb-12 lg:mb-16">
          <h2 className="text-3xl font-bold">Browse The Range</h2>
          <p className="text-xl text-[#666666]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mx-8 lg:mx-12">
          <RangeCard image={RangeImage1} title="Dining" />
          <RangeCard image={RangeImage2} title="Living" />
          <RangeCard image={RangeImage3} title="Bedroom" />
        </div>
      </section>
      {/* Product Section */}
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
                  <button className="text-[#B88E2F] bg-white text-sm font-semibold py-2 px-8 rounded-sm hover:bg-[#96741E] hover:text-white transition duration-300">
                    Add to Cart
                  </button>
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

      {/* Exploration Section */}

      <section className="max-w-[1440px] mx-auto px-8 sm:px-16 lg:px-24 my-16 bg-[#FCF8F3] p-8 shadow-md">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex flex-col items-center sm:items-start gap-4 lg:basis-[40%] text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3A3A3A]">
              50+ Beautiful rooms inspiration
            </h2>
            <p className="text-sm sm:text-base text-[#616161]">
              Our designer already made a lot of beautiful prototypes of rooms
              that inspire you
            </p>
            <button className="bg-[#B88E2F] hover:bg-[#b88f2ff2] rounded-sm py-2 px-6 sm:px-8 text-white text-sm sm:text-base font-semibold mt-4">
              Explore More
            </button>
          </div>

          {/* Right Content (Slider) */}
          <div className="relative flex flex-col items-center lg:basis-[60%] w-full">
            {/* Image with Overlay */}
            <div className="relative w-full">
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].title}
                className="rounded-md"
              />
              <div className="absolute bottom-4 left-4 bg-white p-2 rounded-sm shadow text-[#3A3A3A]">
                <p className="text-sm font-semibold">
                  {images[currentIndex].title}
                </p>
                <p className="text-sm">{images[currentIndex].subtitle}</p>
              </div>
              {/* Navigation Arrows */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <button
                  className="bg-white text-3xl cursor-pointer text-[#B88E2F] rounded-full shadow p-2"
                  onClick={handlePrevious}
                >
                  <IoIosArrowDropleft />
                </button>
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <button
                  className="bg-white text-3xl cursor-pointer text-[#B88E2F] rounded-full shadow p-2"
                  onClick={handleNext}
                >
                  <IoIosArrowDropright />
                </button>
              </div>
            </div>

            {/* Dots for Slider */}
            <div className="flex gap-2 justify-center mt-4">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-[#B88E2F]" : "bg-gray-300"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
