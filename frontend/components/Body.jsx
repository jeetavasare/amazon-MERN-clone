import React from "react";
import Navbar from "./Navbar";
import ProductsGrid from "./ProductsGrid";
import OnlineOffline from "./OnlineOfflineBar";
const Body = () => {
  return (
    <>
      <Navbar />
      <OnlineOffline />
      <div className="main">
        
        <ProductsGrid />
      </div>
    </>
  );
};

export default Body;
