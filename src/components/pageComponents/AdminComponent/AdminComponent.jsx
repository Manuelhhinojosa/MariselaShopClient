import React from "react";
// usestate react hook for production, this will be replaced by redux soon
import { useState } from "react";

// styles
import "./AdminComponent.scss";

// state for production
import data from "../../../assets/data/data.js";
const allProductsArr = data.jArr.concat(data.printsArr);

export const AdminComponent = () => {
  // state for production
  const [allProducts, setAllProducts] = useState(true);
  const [addProduct, setAddProduct] = useState(false);
  const [viewOrders, setViewOrders] = useState(false);

  return (
    <div className="adiminComponentConatainer">
      <div className="adminNavbarContainer">
        <div>see all products</div>
        <div>add a product</div>
        <div>view orders</div>
      </div>

      <div className="mainAdminContainer">
        {allProducts === true &&
        addProduct === false &&
        viewOrders === false ? (
          <div className="allProductsContainer">
            <div className="allProductsTitleContainer ">all products</div>
            {allProductsArr.map((prod) => (
              <div className="prodContainer">
                <div className="imgContainer">
                  <img src={prod.img} alt="" />
                </div>
                <div className="textProdContainer">
                  <div className="leftProdContainer">
                    <div>{prod.title}</div>
                    <div>{prod.shortDesc}</div>
                    <div>{prod.cost}</div>
                  </div>
                  <div className="rightProdContainer">
                    <div>{prod.available ? "In Stock" : "Made to order"}</div>
                    <div>edit</div>
                    <div>delete</div>
                  </div>
                </div>
                <div className="longDescContainer">{prod.longDesc}</div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}

        {allProducts === false &&
        addProduct === true &&
        viewOrders === false ? (
          <div>add product</div>
        ) : (
          ""
        )}

        {allProducts === false &&
        addProduct === false &&
        viewOrders === true ? (
          <div>view all orders</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
