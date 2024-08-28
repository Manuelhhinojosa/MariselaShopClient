import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// styles
import "./SingleProduct.scss";

// production state
import data from "../../../assets/data/data";
const allProds = data.jArr.concat(data.printsArr);

export const SingleProduct = () => {
  let location = useLocation();
  const id = location.pathname.slice(6);

  const product = allProds.filter((p) => p.id == id);

  return (
    <div className="singleProductComponent">
      <div className="imgsContainer">
        <img src={product[0].img} alt="img" />
        <img src={product[0].img2} alt="img" />
      </div>
      <div className="singleImageContainer">
        <img src={product[0].img} alt="img" />
      </div>
      <div className="shopTextContainer">
        <div>{product[0].title}</div>
        <div>{product[0].cost}</div>
        <div>{product[0].available ? "In stock" : "Made to order"}</div>
        <div>{product[0].longDesc}</div>
        <div className="button">Add to cart</div>
        <div className="button">
          <Link className="backLink" to="/shop">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};
