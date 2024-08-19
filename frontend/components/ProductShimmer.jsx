import { getWindowDimensions } from "../utils/useWindowsDimensions";
const ProductShimmerRenderer = () => {
  return (
    <>
      <div className="product-container">
        <div className="product-image-container product-shimmer-image"></div>

        <div className="product-name limit-text-to-2-lines product-shimmer-name"></div>

        <div className="product-rating-container">
          <img
            className="product-rating-stars"
            src="images/ratings/rating-50.png"
          />
          <div className="product-rating-count link-primary">XX</div>
        </div>

        <div className="product-price">XXXX</div>

        <div className="product-quantity-container">
          <select defaultValue={1}>
            
          </select>
        </div>

        <button className="add-to-cart-button button-primary product-shimmer-button"></button>
      </div>
    </>
  );
};
const ProductShimmer = () => {
  let WindowDimensions = getWindowDimensions();
  let n = parseInt(WindowDimensions[0] / 400);
  
  let arr = Array.from({length:n * 6})
  return (
    <>
      {arr.map(
        (item,index)=>{
          return <ProductShimmerRenderer key={index}/>
        }
      )}
    </>
  );
};

export default ProductShimmer;
