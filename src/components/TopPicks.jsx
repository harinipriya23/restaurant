import React from "react";
import { TopFood } from "./TopFood";
import FoodItem from "../document/images.js";


export const TopPicks = ({ category,cartItem,setCartItem,addToCart,removeFromCart }) => {
  return (
    <div className=" mx-10 font-montserrat">
      <h1 className="text-white font-bold text-3xl ml-5 ">
        tops picks near you
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 mt-8 animate justify-evenly gap-10">
        {FoodItem.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <TopFood
                key={index}
                id={item.id}
                name={item.name}
                category={item.category}
                price={item.price}
                rating={item.rating}
                img={item.img}
                quantity={item.quantity} cartItem={cartItem}
                setCartItem={setCartItem}
                addToCart={addToCart}
                removeFromCart={removeFromCart} 
              />
            );
          }
        })}
      </div>
    </div>
  );
};