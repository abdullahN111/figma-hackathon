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

import CartItems from "@/app/components/CartItems";
import SmNavbar from "@/app/components/shared/SmNavbar";
import LgNavbar from "@/app/components/shared/LgNavbar";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  const toggleCart = () => {
    setOpenCart((prev) => !prev);
  };

  return (
    
    <header className="bg-[#FFFFFF] mx-auto max-w-[1440px] h-24 px-6 lg:px-[54px]">
      <div className="flex items-center justify-between h-full">
        
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image src={Logo} alt="furniro logo" width={46} height={30} />
            <h2 className="text-[24px] md:text-[34px] font-bold font-montserrat">
              Furniro
            </h2>
          </div>
        </Link>

        {/* large screens */}
        <LgNavbar />

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
            onClick={(e) =>{
              e.preventDefault();
              toggleCart();
            }}
            className="cursor-pointer hover:shadow-[0_1px_0_rgba(0,0,0,0.2)] transition-shadow"
          >
            <MdOutlineLocalGroceryStore />
          </Link>
        </div>
        {/* small screens */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-3xl">
            <FcMenu />
          </button>
        </div>
      </div>

      {/* menu bar */}
      {openMenu && (
        <div
          className="absolute top-[100px] left-0 w-full py-6 bg-[#FFFFFF] shadow-md z-[1000]"
          onClick={closeMenu} 
        >
          <SmNavbar closeMenu={closeMenu} />
          <div className="flex justify-center gap-6 py-4 text-2xl">
            <Link
              href="/"
              onClick={closeMenu}
              className="cursor-pointer hover:shadow-[0_1px_0_rgba(0,0,0,0.2)] transition-shadow"
            >
              <TbUserExclamation />
            </Link>
            <Link
              href="/"
              onClick={closeMenu}
              className="cursor-pointer hover:shadow-[0_1px_0_rgba(0,0,0,0.2)] transition-shadow"
            >
              <FiSearch />
            </Link>
            <Link
              href="/"
              onClick={closeMenu}
              className="cursor-pointer hover:shadow-[0_1px_0_rgba(0,0,0,0.2)] transition-shadow"
            >
              <FaRegHeart />
            </Link>
            <button
              onClick={toggleCart}
              className="cursor-pointer hover:shadow-[0_1px_0_rgba(0,0,0,0.2)] transition-shadow"
            >
              <MdOutlineLocalGroceryStore />
            </button>
          </div>
        </div>
      )}

      {openCart && (
        <div
          className="fixed right-0 top-0 inset-0 w-full h-screen bg-black bg-opacity-20 z-[1000] flex justify-end"
          onClick={() => setOpenCart(false)}
        >
          
          <CartItems closeCart={() => setOpenCart(false)} />
        </div>
      )}
    </header>
  );
};

export default Header;
