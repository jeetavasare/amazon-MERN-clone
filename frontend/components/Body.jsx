import React, { createContext, useState } from "react";
import Navbar from "./Navbar";
import ProductsGrid from "./ProductsGrid";
import OnlineOffline from "./OnlineOfflineBar";
export const CartContext = createContext()
const Body = () => {
  const [cartItems,setCartItems] = useState(0)
  return (
    <CartContext.Provider value={{cartItems,setCartItems}}>
      <Navbar />
      <OnlineOffline />
      <div className="main">
        
        <ProductsGrid />
      </div>
    </CartContext.Provider>
  );
};

export default Body;
