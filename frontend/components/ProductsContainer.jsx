import React, { useEffect, useState } from "react";
import ProductShimmer from "./ProductShimmer";
const ProductsContainerRenderer = ({ productData }) => {
  
  return <>
    <div className="product-container">
        <div className="product-image-container">
          <img className="product-image" src={productData?.image} />
        </div>

        <div className="product-name limit-text-to-2-lines">
          {productData?.name}
        </div>

        <div className="product-rating-container">
          <img
            className="product-rating-stars"
            src="images/ratings/rating-45.png"
          />
          <div className="product-rating-count link-primary">
            {productData?.rating?.count}
          </div>
        </div>

        <div className="product-price">{productData.priceCents}</div>

        <div className="product-quantity-container">
          <select>
            <option selected value="1">
              1
            </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div className="product-spacer"></div>

        <div className="added-to-cart">
          <img src="images/icons/checkmark.png" />
          Added
        </div>

        <button className="add-to-cart-button button-primary">
          Add to Cart
        </button>
      </div>
  </>;
};

const ProductsContainer = () => {
  let [product, setProduct] = useState();
  useEffect(() => {
    const fetchProduct = async () => {
      let response = await fetch("http://localhost:3000/products");
      let json = await response.json();
      setProduct(json);
    };
    fetchProduct();
  }, []);
  if (!product) {
    return <ProductShimmer/>;
  }
  return (
    <>
      
      {
      product.map((item,index) => {
        return <ProductsContainerRenderer key={item.id} productData={item}/>
      })
      
      }
      
      
    </>
  );
};

export default ProductsContainer;
