import React from "react";
import { Link } from "react-router-dom";

// production state
import data from "../../../assets/data/data";

// styles
import "./CartComponent.scss";

export const CartComponent = () => {
  return (
    <div className="cartPageContainer">
      {data.cartCount === 0 ? (
        <div className="cartContainer">
          <div>Shopping cart</div>
          <div>You have nothing in your shopping cart.</div>
          <div>
            <Link className="backLink" to="/shop">
              {" "}
              Back to shoppng
            </Link>
          </div>
        </div>
      ) : (
        <div className="cartContainer">items</div>
      )}
    </div>
  );
};
