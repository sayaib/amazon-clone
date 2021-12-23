import React from "react";
import "./Product.css";

function Product({ title, price, rating, productImage }) {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={productImage} alt="" />
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
