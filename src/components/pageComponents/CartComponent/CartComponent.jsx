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
        <div className="emptyCartContainer">
          <div>Shopping cart</div>
          <div>You have nothing in your shopping cart.</div>
          <div>
            <Link className="backLink" to="/shop">
              Back to shopping
            </Link>
          </div>
        </div>
      ) : (
        <div className="fullCartContainer">
          <div>Shopping cart</div>
          <div>item</div>
          <div>
            <p>subtotal</p>
            <p>$100.00</p>
          </div>
          <div>
            <Link className="button">Checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
};
