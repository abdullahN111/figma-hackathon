import ShopHeader from "@/app/components/sections/ShopHeader";
import ShopFilter from "@/app/components/sections/ShopFilter";
import ShopButtons from "@/app/components/sections/ShopButtons";
import ProductCard from "@/app/components/cards/ProductCard";

const page = () => {
  return (
    <section className="max-w-[1440px]">
      <ShopHeader />
      <ShopFilter />
      <ProductCard />
      <ShopButtons />
    </section>
  );
};

export default page;
