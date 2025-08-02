import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { HiShoppingCart } from "react-icons/hi";
import { MdAccountCircle } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

export const Navbar = ({ setMenu }) => {
  const links = [
    {
      label: "home",
      href: "",
    },
    {
      label: "menu",
      href: "menu",
    },
    {
      label: "Download",
      href: "download",
    },
    {
      label: "contact",
      href: "contact",
    },
  ];
  return (
    <div
      id="nav"
      className=" sticky flex justify-between items-center text-white
     bg-slate-950 shadow mt-10 mx-5 px-5 h-[50px]"
    >
      <div className=" relative flex items-center">
        <img src="chef.png" className="size-28 absolute" />
        <Link to="/">
          <h1 className="font-extrabold text-lg ml-28 sm:text-2xl">
            Perfect<span className="text-red-400">Taste</span>
          </h1>
        </Link>
      </div>
      <ul className="hidden lg:flex justify-around m-5 gap-5 ">
        {links.map((item) => (
          <li
            key={item.label}
            onClick={() => setMenu(item.label)}
            className="hover:text-slate-300 active:text-red-400"
          >
            <a href={`#${item.href}`}>{item.label}</a>
            {console.log(`#${item.href}`)}{" "}
          </li>
        ))}
      </ul>
      <div className="hidden md:flex">
        <input
          className="relative h-[30px] rounded-2xl px-8 text-[15px]
       lg:w-36 xl:w-52 outline-none text-slate-600"
          placeholder="search food"
        />
        <BiSearch className="absolute text-black size-5 items-center mx-2 mt-1 " />{" "}
      </div>
      <div>
        <ul className="flex justify-between sm:justify-evenly gap-10 m-4">
          <li className="flex gap-1 hover:text-slate-300 active:text-red-400">
            <HiShoppingCart className="relative size-[20px] cursor-pointer mt-0.5 " />
            <GoDotFill className="absolute text-red-400 active:text-white ml-2 size-4 active:animate-ping " />
            <Link to="/cart">Cart </Link>
          </li>
          <li className="flex gap-1 hover:text-slate-300 active:text-red-400 ">
            <MdAccountCircle className="size-[20px] cursor-pointer mt-0.5 " />
            <Link to="/sign-in">
              <button>sign in</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
