import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import FoodContextProvider from "./context/FoodContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename='/restaurant'>  
    <FoodContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </FoodContextProvider>
  </BrowserRouter>
);