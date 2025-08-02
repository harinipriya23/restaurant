import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div id="contact" className="bg-slate-950 text-slate-400 mt-10 pb-10">
      <div className="grid grid-cols-2 md:grid-cols-4 md:place-items-center md:justify-items-center">
        <div className="flex col-span-2 justify-center mx-10  flex-col">
          <h2 className="text-2xl font-bold">
            Perfect <span className="text-red-400">Taste</span>
          </h2>
          <p className="my-5 font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
            repellat amet magnam ea deleniti sit a ex, iure voluptas sequi autem
            vero consequatur maiores sunt, recusandae consequuntur fugit. Velit
            blanditiis dolorem voluptas quidem quod.
          </p>
          <div className="flex cursor-pointer gap-3 md:justify-center ">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
            <FaYoutube />
          </div>
        </div>
        <div className="flex cursor-pointer mx-10 mt-5 flex-col">
          <h1 className="uppercase font-bold text-xl">company</h1>
          <ul className="py-1 text-md">
            <li>home</li>
            <li className="py-0.5">about</li>
            <li className="py-0.5">delivery</li>
            <li className="py-0.5">privacy policy</li>
          </ul>
        </div>
        <div className="flex mx-10 my-5 flex-col">
          <h1 className="uppercase font-bold text-xl">get in touch</h1>
          <ul className="mt-3 cursor-pointer">
            <li className="py-0.5">+91 9876543219</li>
            <li className="py-0.5 lowercase">fooddevlivery98@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-11/12 mx-10 my-5 " />
      <p className="text-center">
        copyrights 2024 © foodDelivery.com - all rights reserved.
      </p>
    </div>
  );
};