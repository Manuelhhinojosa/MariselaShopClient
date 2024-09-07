import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
// for production
import { useState } from "react";

// styles
import "./SingleProduct.scss";

// production state
import data from "../../../assets/data/data";
const allProds = data.jArr.concat(data.printsArr);

export const SingleProduct = () => {
  let location = useLocation();
  const id = location.pathname.slice(6);

  const product = allProds.filter((p) => p.id == id);

  const [isImg1, setIsImg1] = useState(true);

  return (
    <div className="singleProductComponent">
      <div className="imgsContainer">
        <img
          className="images"
          src={product[0].img}
          alt="img"
          onClick={() => setIsImg1(true)}
        />
        <img
          className="images"
          src={product[0].img2}
          alt="img"
          onClick={() => setIsImg1(false)}
        />
      </div>
      <div className="singleImageContainer">
        {isImg1 ? (
          <img src={product[0].img} alt="img" />
        ) : (
          <img src={product[0].img2} alt="img" />
        )}
      </div>
      <div className="shopTextContainer">
        <div>{product[0].title}</div>
        <div>{product[0].cost}</div>
        <div>{product[0].available ? "In stock" : "Made to order"}</div>
        <div>{product[0].longDesc}</div>
        <div className="button">Add to cart</div>
        <div className="button">
          <Link className="backLink" to="/shopmenu">
            Back to shop
          </Link>
        </div>
      </div>
    </div>
  );
};
