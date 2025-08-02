import React from "react";
import burger from "../document/img/burger.jpg";
import { IoArrowUpCircleOutline } from "react-icons/io5";
export const HomeContent = () => {
  return (
    <div
      id="home"
      className=" relative flex justify-center items-center mx-10 h-[500px]
        mt-10 "
    >
      <div className="absolute w-full">
        <img
          src={burger}
          className="ani shadow rounded-2xl h-[500px] object-cover w-full"
        />
      </div>
      <div className=" absolute flex-col flex mx-10 w-[500px] animate ">
        <p
          className="w-[450px] mx-10 text-white transition-shadow text-5xl lg:w-[600px] lg:text-6xl
           font-bold"
        >
          order your <span className="text-7xl text-red-400">favourite </span>
          foods here
        </p>
       <a href="#menu"><button className=" menu-btn ">view menu</button></a> 
      </div>
      <div className="fixed bottom-10 right-0">
        <a href="#menu">
          <IoArrowUpCircleOutline
            
            className=" text-white rounded-full
      fixed right-0 mr-10 animate-bounce size-8"
          />
        </a>
      </div>
    </div>
  );
};
