import React from "react";

// react router
import { Link } from "react-router-dom";

// styles
import "./Shop.scss";

// images
import shopImgUrl from "../../../assets/data/data.js";
import shopImgUrl2 from "../../../assets/data/data.js";

export const Shop = () => {
  return (
    <div className="shopPageContainer ">
      <div>
        <Link to="/shopjewlery">
          <img src={shopImgUrl.shopImgUrl} alt="d" />
        </Link>
      </div>
      <div>
        <Link to="shopprints">
          <img src={shopImgUrl2.shopImgUrl2} alt="d" />
        </Link>
      </div>
    </div>
  );
};
