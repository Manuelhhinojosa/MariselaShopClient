import React from "react";

// components
import { ShopNavbar } from "../../generalComoponents/ShopNavbar/ShopNavbar";
import { ShopContainer } from "../../generalComoponents/ShopContainer/ShopContainer";

// styles
import "./Shop.scss";

export const Shop = () => {
  return (
    <div className="shopPageContainer">
      <ShopNavbar />
      <ShopContainer />
    </div>
  );
};
