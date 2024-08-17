const ProductShimmer = () =>{
    return <>
        <div className="product-container">
        <div className="product-image-container product-shimmer-image">
          
        </div>

        <div className="product-name limit-text-to-2-lines product-shimmer-name">
          
        </div>

        <div className="product-rating-container">
          <img
            className="product-rating-stars"
            src="images/ratings/rating-50.png"
          />
          <div className="product-rating-count link-primary">
            XX
          </div>
        </div>

        <div className="product-price">XXXX</div>

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

        

        

        <button className="add-to-cart-button button-primary product-shimmer-button">
          
        </button>
      </div>
    </>
}

export default ProductShimmer