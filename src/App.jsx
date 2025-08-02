import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Cart } from "./pages/Cart";
import { PlaceOrder } from "./pages/PlaceOrder";
import { SignIn } from "./pages/SignIn";

function App() {
  const [menu, setMenu] = useState("menu");
  const [cartItem, setCartItem] = useState({});
  const addToCart = (id) => {
    if (!cartItem[id]) {
      setCartItem((prev) => ({ ...prev, [id]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    }
  };

  const removeFromCart = (id) => {
    setCartItem((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };
  return (
    <div>
      <Navbar setMenu={setMenu} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              menu={menu}
              setMenu={setMenu}
              cartItem={cartItem}
              setCartItem={setCartItem}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <Cart
              cartItem={cartItem}
              setCartItem={setCartItem}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        ></Route>
        <Route
          path="/place-order"
          element={<PlaceOrder cartItem={cartItem} />}
        ></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
