import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
          <img className="checkout_ad" src="https://m.media-amazon.com/images/I/41dtHRtxo3L._SX1500_.jpg" alt="" />
          <div>
              <h2 className="checkout_title">
                  Your Shopping Cart
              </h2>
          </div>
      </div>
      <div className="checkout_right">
          <h2>The sub total</h2>
      </div>
    </div>
  );
}

export default Checkout;
