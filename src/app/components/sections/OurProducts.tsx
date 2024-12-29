import ProductCard from "@/app/components/cards/ProductCard";
import Link from "next/link";

const OurProducts = () => {
  return (
    <section className="max-w-[1200px] mx-auto font-poppins my-16 flex flex-col justify-center">
      <h2 className="text-4xl font-bold text-[#3A3A3A] text-center">
        Our Products
      </h2>
      <ProductCard />
      <button className="border mx-auto rounded-sm border-[#B88E2F] text-[#B88E2F] text-base font-semibold py-2 px-10 mt-8 sm:mt-4 md:mt-2 hover:text-white hover:bg-[#B88E2F] transition duration-300 py">
      <Link href="/shop">
        Show More
      </Link>
      </button>
    </section>
  );
};

export default OurProducts;
