import React from "react";

// React Router
import { Link } from "react-router-dom";

// production data
import data from "../../../assets/data/data";

// styles
import "./ShopMenuComponent.scss";

export const ShopMenuComponent = () => {
  return (
    <div className="shopMenuLinkBigScreen">
      <div>
        <Link
          to="/shopproducts"
          onClick={() => (data.isItJ = false)}
          className="shopMenuLinkBigScreenLink"
        >
          prints
        </Link>
        ***
        <Link
          to="/shopproducts"
          onClick={() => (data.isItJ = true)}
          className="shopMenuLinkBigScreenLink"
        >
          jewellery
        </Link>
      </div>

      <div>
        <Link
          className="shopMenuLink"
          to="/shopproducts"
          onClick={() => (data.isItJ = false)}
        >
          <img src={data.homeImgUrl2} alt="linkImaage" />
        </Link>
      </div>
      <div>
        <Link
          className="shopMenuLink"
          to="/shopproducts"
          onClick={() => (data.isItJ = true)}
        >
          <img src={data.homeImgUrl} alt="linkImaage" />
        </Link>
      </div>
    </div>
  );
};
