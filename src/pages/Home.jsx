import React, { useState } from "react";
import {HomeContent} from '../components/HomeContent'
import {ExploreMenu} from '../components/ExploreMenu'
import {TopPicks} from '../components/TopPicks'
import DownloadApp from '../components/DownloadApp'


export const Home = ({menu,setMenu,cartItem,setCartItem,addToCart,removeFromCart}) => {
  const [category, setCategory] = useState ('All')
  
  
  return (
    <>
      <HomeContent menu={menu} setMenu={setMenu} />
      <ExploreMenu category={category} setCategory={setCategory} />
      <TopPicks category={category}  cartItem={cartItem}
                setCartItem={setCartItem}
                addToCart={addToCart}
                removeFromCart={removeFromCart} />
      <DownloadApp />
    </>
  );
};