import React from "react";
import { MenuList } from "../document/images";

export const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div
      id="menu"
      className="flex flex-col mt-10 text-white ani font-poppins mx-14  "
    >
      <h1 className="text-3xl font-bold p-3">explore our menu</h1>
      <p className="text-[18px] mx-3">
        our mission is to satisfy your cravings and elevate your dining
        experince, one delicious meal at a time.
      </p>
      <div className="box flex py-5 h-56 text-center my-2 overflow-x-scroll animate  ">
        <div className="flex">
          {MenuList.map((item, index) => {
            return (
              <div
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.name ? "All" : item.name
                  )
                }
                className="h-[170px] mx-2 w-[170px]"
                key={index}
              >
                <img
                  src={item.img}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "100%",
                    transition: "0.2s",
                    objectFit: "cover",
                  }}
                  className={category === item.name ? "activee" : ""}
                />
                <p className="text-[16px] mt-2 cursor-pointer ani text-center text-bg-slate-300 font-medium">
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <hr className="w-11/12 md:w-auto my-10 border-1 border-slate-400" />
    </div>
  );
};
