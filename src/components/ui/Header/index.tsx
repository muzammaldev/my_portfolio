"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RiMenuFill } from "react-icons/ri";

type Props = {};

const Header = (props: Props) => {
  const [openNavBar, setOpenNavBar] = useState(false);

  return (
    <header className="items-center flex justify-between bg-blue-500 px-10 py-5 max-sm:block">
      <ul>
        <li className="bg-clip-text text-transparent bg-gradient-to-r from-white to-red-700 font-bold uppercase text-xl cursor-pointer">
          Portfolio
        </li>
      </ul>
      <div className={`${openNavBar ? "" : "max-sm:hidden"}`}>
        <ul className="flex gap-14 max-sm:block">
          <li className="text-white   max-sm:py-4 hover:underline cursor-pointer">
            Home
          </li>
          <a href="#about">
            <li className="text-white   max-sm:py-4 hover:underline cursor-pointer">
              About
            </li>
          </a>
          <li className="text-white   max-sm:py-4 hover:underline cursor-pointer">
            Services
          </li>
          <a href="#contect">
            <li className="text-white   max-sm:py-4 hover:underline cursor-pointer">
              Contact
            </li>
          </a>
        </ul>
      </div>
      <div
        onClick={() => setOpenNavBar(!openNavBar)}
        className="absolute text-white right-10 top-6 cursor-pointer text-2xl hidden max-sm:block"
      >
        <RiMenuFill />
      </div>
    </header>
  );
};

export default Header;
