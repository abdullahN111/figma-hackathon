"use client";

import Image from "next/image";
import Delete from "@/app/components/svgs/Delete";
import { productCardInfo } from "@/app/Data/product";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";

const Cart = () => {
  const { id } = useParams<{ id: string }>();
  const searchParams = useSearchParams();
  const quantity = parseInt(searchParams.get("quantity") || "1", 10);

  const item = productCardInfo.find((item) => item.id === parseInt(id)); //finding product id
  if (!item) {
    return (
      <div className="text-center mt-10">
        <p>Item not found. Please check the URL.</p>
        <Link href="/shop" className="text-blue-500 underline">
          Go back to item
        </Link>
      </div>
    );
  }

  const subtotal = Number(item.price) * quantity;

  return (
    <section className="max-w-[1440px] bg-white container mx-auto px-3 sm:px-6 lg:px-20 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Table Section */}
        <div className="lg:col-span-2">
          <div className="overflow-x-auto lg:overflow-x-visible">
            <table className="w-full min-w-[700px] border-collapse bg-white text-left text-sm">
              <thead className="bg-[#F9F1E7]">
                <tr className="text-base font-semibold">
                  <th className="p-4 border-none whitespace-nowrap">Product</th>
                  <th className="p-4 border-none whitespace-nowrap">Price</th>
                  <th className="p-4 border-none whitespace-nowrap">
                    Quantity
                  </th>
                  <th className="p-4 border-none whitespace-nowrap">
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-none">
                  <td className="py-4 whitespace-nowrap">
                    <div className="flex items-center justify-start space-x-5">
                      <Image
                        src={item.mainImage}
                        alt="product"
                        width={90}
                        height={90}
                        className="rounded-md"
                      />
                      <span className="text-[#9F9F9F] text-base break-word">
                        {item.name}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 text-[#9F9F9F] text-base text-start whitespace-nowrap">
                    {item.price}.00
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex justify-start">
                      <input
                        type="number"
                        defaultValue={quantity}
                        min={1}
                        className="w-10 h-8 rounded border px-1 py-1 text-center focus:outline-none"
                        readOnly
                      />
                    </div>
                  </td>
                  <td className="p-4 text-black text-base font-medium text-start whitespace-nowrap">
                    <div className="flex items-center justify-start gap-8">
                      <span>{subtotal}.00</span>
                      <Delete />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Cart Totals Section */}
        <div className="bg-[#F9F1E7] py-8 px-11 sm:p-8 rounded-sm shadow-lg w-auto sm:w-1/2 lg:w-full mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-16">
            Cart Totals
          </h2>
          <div className="flex justify-between mb-5">
            <span className="text-base font-semibold">Subtotal</span>
            <span className="text-base text-[#9F9F9F]">{subtotal}.00</span>
          </div>
          <div className="flex justify-between font-medium mb-5">
            <span className="text-base font-semibold">Total</span>
            <span className="text-xl text-[#B88E2F] font-semibold">
              {subtotal}.00
            </span>
          </div>

          <Link href="/checkout">
          <button className="block mx-auto w-[200px] rounded-xl border border-black text-black px-2 py-3 text-xl hover:bg-[#fae9d3a6] transition my-10">
            Check Out
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;
