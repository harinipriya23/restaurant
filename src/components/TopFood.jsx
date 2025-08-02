import React from "react";
import { MdStar } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { TiMinus, TiPlus } from "react-icons/ti";

export const TopFood = ({
  id,
  name,
  price,
  rating,
  img,category,quantity,cartItem,setCartItem,addToCart,removeFromCart
}) => {
  // const [cartItem, setCartItem] = useState({});
  // const addToCart = (id) => {
  //   console.log("hijk");
  //   //const existingItem = cartItem.find((item) => item.id === id);
  //   if (!cartItem[id]) {
  //     setCartItem((prev) => ({ ...prev, [id]: 1 }));
  //     // setCartItem(
  //     //   cartItem?.map((item) =>
  //     //     item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  //     //   )
  //     // );
  //   } else {
  //     setCartItem((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  //     // setCartItem([...cartItem, { ...id, quantity: 1 }]);
  //   }
  // };

  // const removeFromCart = (id) => {
  //   setCartItem((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  //   //setCartItem(cartItem.filter((item) => item.id !== id));
  // };
  // useEffect(() => {
  //   console.log(cartItem), [cartItem];
  // });

  return (
    <div className="flex flex-col group scroll-m-7 bg-gray-900 shadow-sm shadow-white rounded-xl text-white">
      <div className=" flex ani h-52 rounded-3xl ">
        <img src={img} className="h-full w-full rounded-t-xl object-cover
       group-hover:scale-90 duration-300 " />
      </div>
      <div className="flex justify-between mx-5 my-4">
        <p className="text-md ">{name}</p>
        <p className="flex gap-1">
          <MdStar className="size-5 text-yellow-400 mt-0.5" />
          {rating}
        </p>
      </div>
      <div className="flex justify-between">
        <p className="text-white font-[2px] ml-5 text-[18px] items-center flex gap-1">
          <FaIndianRupeeSign /> {price}
        </p>
        {!cartItem[id] ? (
          <p
            onClick={() => addToCart(id)}
            className="flex justify-around items-center font-bold cursor-pointer bg-green-500 text-white 
          rounded-3xl py-1.5 px-6 m-3 hover:shadow hover:bg-green-600"
          >
            ADD
          </p>
        ) : (
          <div
            className="flex justify-around items-center font-bold cursor-pointer bg-green-500 text-white 
         py-1.5 px-4 rounded-3xl gap-4 m-3"
          >
            <TiMinus
              onClick={() => {
                removeFromCart(id);
              }}
            />
            <p>{cartItem[id]}</p>
            <TiPlus
              onClick={() => {
                addToCart(id);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};