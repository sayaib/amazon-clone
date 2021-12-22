import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>The lean startup</p>
        <p className="product_price">
          <small>₹</small>
          <strong>155</strong>
        </p>
        <div className="product_rating">
          <p>⭐</p>
        </div>
      </div>
      <img
        src="https://images-eu.ssl-images-amazon.com/images/I/51u2E5fNq8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
        alt=""
      />
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
