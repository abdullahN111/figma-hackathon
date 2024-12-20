"use client";

import { useState } from "react";
import Link from "next/link";

import SecondaryHeader from "@/app/components/shared/SecondaryHeader";
import ServiceBar from "@/app/components/shared/ServiceBar";
import { FaAngleDown } from "react-icons/fa";

const Page = () => {
  const [selectedOption, setSelectedOption] = useState("Direct Bank Transfer");

  return (
    <section className="max-w-[1440px] font-poppins">
      <SecondaryHeader routeName="Checkout" />
      <div className="py-10 px-2 lg:px-24 flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-6">
        <div className="w-full sm:w-[600px] py-16 px-4 sm:px-8 lg:px-16">
          <h2 className="text-[32px] sm:text-[34px] font-semibold mb-8">
            Billing Details
          </h2>
          <form className="flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-col gap-[17px] w-full sm:w-[48%]">
                <label className="text-base font-semibold" htmlFor="firstname">
                  First Name
                </label>
                <input
                  type="text"
                  className="border border-[#9F9F9F] rounded-lg focus:outline-none h-[70px] w-full text-base px-[14px]"
                  id="firstname"
                  name="firstname"
                />
              </div>
              <div className="flex flex-col gap-[17px] w-full sm:w-[48%]">
                <label className="text-base font-semibold" htmlFor="lastname">
                  Last Name
                </label>
                <input
                  type="text"
                  className="border border-[#9F9F9F] rounded-lg focus:outline-none h-[70px] w-full text-base px-[14px]"
                  id="lastname"
                  name="lastname"
                />
              </div>
            </div>

            <div className="flex flex-col gap-[17px] w-full">
              <label className="text-base font-semibold" htmlFor="company">
                Company Name (Optional)
              </label>
              <input
                type="text"
                className="border border-[#9F9F9F] rounded-lg focus:outline-none h-[70px] w-full text-base px-[14px]"
                id="company"
                name="company"
              />
            </div>

            <div className="flex flex-col gap-[17px] relative w-full">
              <label className="text-base font-semibold" htmlFor="country">
                Country / Region
              </label>
              <div className="relative">
                <select
                  id="country"
                  name="country"
                  className="border border-[#9F9F9F] rounded-lg focus:outline-none h-[70px] w-full text-base px-5 appearance-none"
                >
                  <option
                    className="text-[#9F9F9F] text-base"
                    value=""
                    disabled
                    selected
                  >
                    Select Country
                  </option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="India">India</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                </select>
                <span className="text-xl absolute right-6 top-1/2 transform -translate-y-1/2 cursor-pointer">
                  <FaAngleDown />
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-[17px] w-full">
              <label
                className="text-base font-semibold"
                htmlFor="streetaddress"
              >
                Street Address
              </label>
              <input
                type="text"
                className="border border-[#9F9F9F] rounded-lg focus:outline-none h-[70px] w-full text-base px-[14px]"
                id="streetaddress"
                name="streetaddress"
              />
            </div>
            <div className="flex flex-col gap-[17px] w-full">
              <label className="text-base font-semibold" htmlFor="city">
                Town / City
              </label>
              <input
                type="text"
                className="border border-[#9F9F9F] rounded-lg focus:outline-none h-[70px] w-full text-base px-[14px]"
                id="city"
                name="city"
              />
            </div>
            <div className="flex flex-col gap-[17px] relative w-full">
              <label className="text-base font-semibold" htmlFor="country">
                Province
              </label>
              <div className="relative">
                <select
                  id="country"
                  name="country"
                  className="border border-[#9F9F9F] rounded-lg focus:outline-none h-[70px] w-full text-base px-5 appearance-none"
                >
                  <option
                    className="text-[#9F9F9F] text-base"
                    value=""
                    disabled
                    selected
                  >
                    Western Province
                  </option>
                  <option value="Pakistan">Sindh</option>
                  <option value="India">Punjab</option>
                  <option value="Bangladesh">KPK</option>
                  <option value="Sri Lanka">Balochistan</option>
                </select>
                <span className="text-xl absolute right-6 top-1/2 transform -translate-y-1/2 cursor-pointer">
                  <FaAngleDown />
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-[17px] w-full">
              <label className="text-base font-semibold" htmlFor="zipcode">
                ZIP Code
              </label>
              <input
                type="text"
                className="border border-[#9F9F9F] rounded-lg focus:outline-none h-[70px] w-full text-base px-[14px]"
                id="zipcode"
                name="zipcode"
              />
            </div>
            <div className="flex flex-col gap-[17px] w-full">
              <label className="text-base font-semibold" htmlFor="phone">
                Phone
              </label>
              <input
                type="tel"
                className="border border-[#9F9F9F] rounded-lg focus:outline-none h-[70px] w-full text-base px-[14px]"
                id="phone"
                name="phone"
              />
            </div>
            <div className="flex flex-col gap-[17px] w-full">
              <label className="text-base font-semibold" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                className="border border-[#9F9F9F] rounded-lg focus:outline-none h-[70px] w-full text-base px-[14px]"
                id="email"
                name="email"
              />
            </div>
            <div className="flex flex-col gap-[17px] w-full mt-4">
              <input
                type="text"
                className="border border-[#9F9F9F] rounded-lg focus:outline-none h-[70px] w-full text-base text-[#9F9F9F] px-[14px]"
                id="addinfo"
                name="addinfo"
                placeholder="Additional Information"
              />
            </div>
          </form>
        </div>
        <div className="w-full sm:w-[600px] pt-10 pb-16 lg:py-[102px] px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col gap-4 mb-7">
            <div className="flex items-center justify-between">
              <h5 className="text-[21px] lg:text-[22px] font-semibold">
                Product
              </h5>
              <h5 className="text-[21px] lg:text-[22px] font-semibold">
                Subtotal
              </h5>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[4px] sm:gap-[6px] lg:gap-2">
                <span className="text-[15px] lg:text-base text-[#9F9F9F]">
                  Asgard Sofa
                </span>
                <span className="text-base lg:text-lg">&times;</span>
                <span className="text-sm">1</span>
              </div>
              <div>
                <p className="text-[15px] lg:text-base">Rs. 250,000.00</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[15px] lg:text-base">Subtotal</p>
              <p className="text-[15px] lg:text-base">Rs. 250,000.00</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[15px] lg:text-base">Total</p>
              <h4 className="text-lg sm:text-[22px] lg:text-2xl text-[#B88E2F] font-bold">
                Rs. 250,000.00
              </h4>
            </div>
          </div>
          <div className="bg-[#D9D9D9] h-px w-full my-4"></div>
          <div className="flex flex-col items-start gap-[22px]">
            <div>
              <h2 className="text-lg font-semibold">Payment</h2>
              <p className="text-[#9F9F9F] text-base mt-2">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            </div>
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Direct Bank Transfer"
                  checked={selectedOption === "Direct Bank Transfer"}
                  onChange={() => setSelectedOption("Direct Bank Transfer")}
                  className="form-radio text-[#9F9F9F] focus:ring-0"
                />
                <span className="text-base text-[#9F9F9F]">
                  Direct Bank Transfer
                </span>
              </label>
              <label className="flex items-center space-x-2 mt-3">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Cash On Delivery"
                  checked={selectedOption === "Cash On Delivery"}
                  onChange={() => setSelectedOption("Cash On Delivery")}
                  className="form-radio text-[#9F9F9F] focus:ring-0"
                />
                <span className="text-base text-[#9F9F9F]">
                  Cash On Delivery
                </span>
              </label>
            </div>
            <div>
              <p className="text-base">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <Link href="/" className="font-semibold">
                  privacy policy.
                </Link>
              </p>
            </div>
            <button className="block mx-auto w-[215px] sm:w-[230px] rounded-xl border border-black text-black px-2 py-3 text-xl hover:bg-[#fae9d3a6] transition my-6 lg:my-8">
              Place Order
            </button>
          </div>
        </div>
      </div>
      <ServiceBar />
    </section>
  );
};

export default Page;
