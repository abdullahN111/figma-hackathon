"use client";

import Image from "next/image";
import Logo from "@/app/public/assets/images/main/Logo.png";
import { TbUserExclamation } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FcMenu } from "react-icons/fc";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-[#FFFFFF] mx-auto max-w-[1440px] h-24 px-6 lg:px-[54px]">
      <div className="flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={Logo} alt="furniro logo" width={46} height={30} />
          <h2 className="text-[24px] md:text-[34px] font-bold font-montserrat">
            Furniro
          </h2>
        </div>

        {/* For Large Screens */}
        <ul className="hidden lg:flex font-poppins gap-[65px]">
          <Link
            href="/"
            className="cursor-pointer hover:shadow-[0_3px_0_rgba(0,0,0,0.2)] transition-shadow"
          >
            <li className="text-base">Home</li>
          </Link>
          <Link
            href="/shop"
            className="cursor-pointer hover:shadow-[0_3px_0_rgba(0,0,0,0.2)] transition-shadow"
          >
            <li className="text-base">Shop</li>
          </Link>
          <Link
            href="/about"
            className="cursor-pointer hover:shadow-[0_3px_0_rgba(0,0,0,0.2)] transition-shadow"
          >
            <li className="text-base">About</li>
          </Link>
          <Link
            href="/contact"
            className="cursor-pointer hover:shadow-[0_3px_0_rgba(0,0,0,0.2)] transition-shadow"
          >
            <li className="text-base">Contact</li>
          </Link>
        </ul>

        <div className="hidden lg:flex text-2xl gap-8">
          <Link
            href="/"
            className="cursor-pointer hover:shadow-[0_1px_0_rgba(0,0,0,0.2)] transition-shadow"
          >
            <TbUserExclamation />
          </Link>
          <Link
            href="/"
            className="cursor-pointer hover:shadow-[0_1px_0_rgba(0,0,0,0.2)] transition-shadow"
          >
            <FiSearch />
          </Link>
          <Link
            href="/"
            className="cursor-pointer hover:shadow-[0_1px_0_rgba(0,0,0,0.2)] transition-shadow"
          >
            <FaRegHeart />
          </Link>
          <Link
            href="/"
            className="cursor-pointer hover:shadow-[0_1px_0_rgba(0,0,0,0.2)] transition-shadow"
          >
            <MdOutlineLocalGroceryStore />
          </Link>
        </div>
        {/* For Small Screens */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-3xl">
            <FcMenu />
          </button>
        </div>
      </div>

      {/* Menu */}
      {menuOpen && (
        <div className="absolute top-[100px] left-0 w-full py-8 bg-[#FFFFFF] shadow-md z-[1000]">
          <ul className="flex flex-col items-center font-poppins py-4 gap-4">
            <Link href="/" onClick={toggleMenu}  className="cursor-pointer hover:shadow-[0_3px_0_rgba(0,0,0,0.2)] transition-shadow">
              <li className="text-base cursor-pointer">Home</li>
            </Link>
            <Link href="/shop" onClick={toggleMenu}  className="cursor-pointer hover:shadow-[0_3px_0_rgba(0,0,0,0.2)] transition-shadow">
              <li className="text-base cursor-pointer">Shop</li>
            </Link>
            <Link href="/about" onClick={toggleMenu}  className="cursor-pointer hover:shadow-[0_3px_0_rgba(0,0,0,0.2)] transition-shadow">
              <li className="text-base cursor-pointer">About</li>
            </Link>
            <Link href="/contact" onClick={toggleMenu}  className="cursor-pointer hover:shadow-[0_3px_0_rgba(0,0,0,0.2)] transition-shadow">
              <li className="text-base cursor-pointer">Contact</li>
            </Link>
          </ul>
          <div className="flex justify-center gap-6 py-4 text-2xl">
            <Link href="/" onClick={toggleMenu}  className="cursor-pointer hover:shadow-[0_1px_0_rgba(0,0,0,0.2)] transition-shadow">
              <TbUserExclamation />
            </Link>
            <Link href="/" onClick={toggleMenu}  className="cursor-pointer hover:shadow-[0_1px_0_rgba(0,0,0,0.2)] transition-shadow">
              <FiSearch />
            </Link>
            <Link href="/" onClick={toggleMenu}  className="cursor-pointer hover:shadow-[0_1px_0_rgba(0,0,0,0.2)] transition-shadow">
              <FaRegHeart />
            </Link>
            <Link href="/" onClick={toggleMenu}  className="cursor-pointer hover:shadow-[0_1px_0_rgba(0,0,0,0.2)] transition-shadow">
              <MdOutlineLocalGroceryStore />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
