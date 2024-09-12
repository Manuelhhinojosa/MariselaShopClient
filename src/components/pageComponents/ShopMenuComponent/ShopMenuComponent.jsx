import React from "react";

// React Router
import { Link } from "react-router-dom";

// redux
import { useSelector } from "react-redux";

// mock data
import data from "../../../assets/data/data";

// styles
import "./ShopMenuComponent.scss";

export const ShopMenuComponent = () => {
  // redux || state
  const staticImages = useSelector((state) => state.imagesSlice);

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
          <img src={staticImages.mainShopMenuImageImageUrl} alt="linkImaage" />
        </Link>
      </div>
      <div>
        <Link
          className="shopMenuLink"
          to="/shopproducts"
          onClick={() => (data.isItJ = true)}
        >
          <img src={staticImages.mainShopMenuImageImageUrl2} alt="linkImaage" />
        </Link>
      </div>
    </div>
  );
};
