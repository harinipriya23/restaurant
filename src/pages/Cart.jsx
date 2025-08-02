import React from "react";
import FoodItem from "../document/images.js";
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";

export const Cart = ({ cartItem, removeFromCart }) => {
  const navigate = useNavigate();
  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = FoodItem.find(
          (product) => product.id === cartItem[item]
        );
        totalAmount += itemInfo.price * cartItem[item];
      }
    }
    return totalAmount;
  };
  return (
    <div className="text-white mx-10 my-14">
      {console.log(cartItem.id)}
      <div className="">
        <div className="grid font-semibold grid-cols-12 mx-1 text-center  mb-4 ">
          <p className=" col-span-2 ">items</p>
          <p className="col-span-2 ">title</p>
          <p className="col-span-2 ">price</p>
          <p className="col-span-2 ">quantity</p>
          <p className="col-span-2 ">total</p>
          <p className=" col-span-1">remove</p>
        </div>
        <hr />
        {FoodItem.map((item, index) => {
          if (cartItem[item.id] > 0) {
            return (
              <div
                key={index}
                className="text-white
               grid grid-cols-12 mx-1 my-4 text-center justify-items-center place-items-center mb-4"
              >
                <img className="h-20 col-span-2  w-20" src={item.img} />
                <p className=" col-span-2 ">{item.name}</p>
                <p className=" col-span-2 ">{item.price}</p>
                <p className=" col-span-2 ">{cartItem[item.id]}</p>
                <p className=" col-span-2 ">{item.price * cartItem[item.id]}</p>
                <ImCross onClick={() => removeFromCart(item.id)} />
              </div>
            );
          }
        })}
      </div>
      <div>
        <div className="flex flex-col-reverse md:flex-row md:justify-around my-10 mx-5">
          <div className="flex flex-col w-1/2">
            <h1 className="font-bold text-2xl">cart total</h1>
            <div className="flex my-3 justify-between text-[18px]">
              <p className="">subTotal</p>
              <p className="">{getTotalAmount()}</p>
            </div>
            <hr className="" />
            <div className="flex my-3 justify-between text-[18px]">
              <p className="">delivery fee</p>
              <p className="">9</p>
            </div>
            <hr />
            <div className="flex my-3 justify-between text-[18px]">
              <p className="font-medium">total</p>
              <p className="font-bold">{getTotalAmount() + 9}</p>
            </div>
            <hr />
            <button
              onClick={() => navigate("/place-order")}
              className="my-5 w-1/2 mx-auto px-4 py-2 bg-red-600 hover:bg-red-500
            hover:shadow-red-400 hover:shadow-sm rounded-lg capitalize"
            >
              proceed to checkout
            </button>
          </div>
          <div className="flex flex-col">
            <div>
              <p
                className="text-slate-300 
              text-lg font-semibold"
              >
                enter your coupen code here
              </p>
              <div className="my-3">
                <input
                  className="outline-none absolute w-3/4 md:w-64 py-1 px-2 rounded-lg"
                  placeholder="coupen code"
                />
              </div>
              <button
                className="mb-5 relative px-4 py-1 float-right  bg-slate-600 hover:bg-slate-500
            hover:shadow-red-400 hover:shadow-sm rounded-lg capitalize"
              >
                apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
