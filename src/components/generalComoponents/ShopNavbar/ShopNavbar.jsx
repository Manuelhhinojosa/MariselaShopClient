import React from "react";

// styles
import "./ShopNavbar.scss";

// react router
import { Link } from "react-router-dom";

export const ShopNavbar = () => {
  return (
    <div className="shopNavbarContainer">
      <div>
        <Link className="shop-links" to="/shop">
          Jewellery
        </Link>
      </div>

      <div>
        <Link className="shop-links" to="/shop2">
          Prints
        </Link>
      </div>
    </div>
  );
};
