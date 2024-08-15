import React from "react";
import Navbar from "./Navbar";
import ProductsGrid from "./ProductsGrid";
const Body = () =>{
    return <>
        <Navbar/>
        <div className="main">
            <ProductsGrid/>

        </div>
    </>
}

export default Body