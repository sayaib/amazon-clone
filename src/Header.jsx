import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
        alt="amazon-logo"
      />
      <div className="header_search">
        <input type="text" className="header_searchIn" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello Guest</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Retun</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
