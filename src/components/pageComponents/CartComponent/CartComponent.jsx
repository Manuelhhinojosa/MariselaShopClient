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
          <div className="titleCont">shopping cartt</div>
          <div className="messageCont">
            you have nothing in your shopping cart.
          </div>
          <div className="backCont">
            <Link className="backLink" to="/shopmenu">
              back to shopping
            </Link>
          </div>
        </div>
      ) : (
        <div className="fullCartContainer">
          <div className="titleContainer">shopping cart</div>

          <div className="cartItemsContainer">
            {data.printsArr.map((p) => (
              <div className="itemsCont">
                <div>
                  <img src={p.img2} alt="" />
                </div>
                <div>
                  <p>{p.title}</p>
                  <p className="text">{p.shortDesc}</p>
                </div>
                <div>+ {1} -</div>
                <div>{p.cost}</div>
              </div>
            ))}
          </div>

          <div className="subtotalContainer">
            <p>subtotal</p>
            <p>{"$600.00"}</p>
          </div>

          <div className="checkoutContainer">
            <Link to="/checkout" className="button">
              checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
