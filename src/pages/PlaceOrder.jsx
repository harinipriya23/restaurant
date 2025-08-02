import React from "react";
import FoodItem from '../document/images.js'

export const PlaceOrder = ({ cartItem }) => {
  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        console.log(item, FoodItem);
        let itemInfo = FoodItem.find(
          (product) => product.id === cartItem[item]
        );
        console.log(itemInfo);
        totalAmount += itemInfo.price * cartItem[item];
      }
    }
    return totalAmount;
  };
  return (
    <div className="flex flex-col md:flex-row md:justify-around text-white px-5 mx-10 mt-10 mb-10">
      <div className="">
        <h1 className="text-xl font-semibold">delivery information </h1>
        <div className="my-6 outline-none  flex gap-5">
          <input
            className="px-2 rounded-md text-black py-2"
            type="text"
            placeholder="first name"
          />
          <input
            className="px-2 rounded-md text-black py-2"
            type="text"
            placeholder="second name"
          />
        </div>
        <div className="flex flex-col outline-none  gap-5 my-4 ">
          <input
            className="px-2 rounded-md w-96 md:w-full text-black py-2"
            type="email"
            placeholder="email address"
          />
          <input
            className="px-2 rounded-md w-96 md:w-full text-black py-2"
            type="text"
            placeholder="street"
          />
        </div>
        <div className="my-6 outline-none  flex gap-5">
          <input
            className="px-2 rounded-md text-black py-2"
            type="text"
            placeholder="city"
          />
          <input
            className="px-2 rounded-md text-black py-2"
            type="text"
            placeholder="state"
          />
        </div>
        <div className="my-6 outline-none  flex gap-5">
          <input
            className="px-2 rounded-md text-black py-2"
            type="text"
            placeholder="zip code"
          />
          <input
            className="px-2 rounded-md text-black py-2"
            type="text"
            placeholder="country"
          />
        </div>
        <div>
          <input
            className="px-2 outline-none  rounded-md text-black py-2"
            type="number"
            placeholder="phone"
          />
        </div>
        <button
          className="my-5 w-1/2 mx-auto font-bold tracking-wider capitalize px-4 py-2 bg-red-600 hover:bg-red-500
            hover:shadow-red-400 hover:shadow-sm rounded-lg">
          add address
        </button>
      </div>
      <div className="md:w-2/5 md:mx-14">
        <div className="flex flex-col my-5 w-full">
          <h1 className="font-bold text-2xl">cart total</h1>
          <div className="flex my-3 justify-between text-[18px]">
            <p className="">subTotal</p>
            <p className="">{getTotalAmount()}</p>
          </div>
          <hr className="" />
          <div className="flex my-3 justify-between text-[18px]">
            <p className="">delivery fee</p>
            <p className="">{getTotalAmount() === 0 ? 0 : 9}</p>
          </div>
          <hr />
          <div className="flex my-3 justify-between text-[18px]">
            <p className="font-medium">total</p>
            <p className="font-bold">
              {getTotalAmount() === 0 ? 0 : getTotalAmount() + 9}
            </p>
          </div>
          <hr />
          <button
            className="my-5 w-1/2 mx-auto px-4 py-2 bg-red-600 hover:bg-red-500
            hover:shadow-red-400 hover:shadow-sm rounded-lg capitalize"
          >
            proceed to payment
          </button>
        </div>
      </div>
    </div>
  );
};