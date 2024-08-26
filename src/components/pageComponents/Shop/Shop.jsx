import React from "react";

// components
import { ShopNavbar } from "../../generalComoponents/ShopNavbar/ShopNavbar";

// styles
import "./Shop.scss";
import { ShopContainer } from "../../generalComoponents/ShopContainer/ShopContainer";

export const Shop = () => {
  return (
    <div className="shopPageContainer">
      <ShopNavbar />
      <ShopContainer />
    </div>
  );
};
