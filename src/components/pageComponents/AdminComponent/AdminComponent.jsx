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

  // production functions
  const showAllProds = () => {
    setAllProducts(true);
    setAddProduct(false);
    setViewOrders(false);
  };

  const showAddProduct = () => {
    setAllProducts(false);
    setAddProduct(true);
    setViewOrders(false);
  };

  const showViewOrders = () => {
    setAllProducts(false);
    setAddProduct(false);
    setViewOrders(true);
  };

  return (
    <div className="adiminComponentConatainer">
      <div className="adminNavbarContainer">
        <div onClick={() => showAllProds()}>see all products</div>
        <div onClick={() => showAddProduct()}>add a product</div>
        <div onClick={() => showViewOrders()}>view orders</div>
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
          <div className="addProductContainer">
            <form>
              <input type="file" name="files" id="files" />
              <input type="text" placeholder="available?" />
              <input type="text" placeholder="title" />
              <input type="text" placeholder="type" />
              <textarea
                placeholder="short description"
                name="shortDesc"
                id="shortDesc"
                cols="10"
                rows="10"
              ></textarea>
              <textarea
                placeholder="long description"
                name="longtDesc"
                id="longDesc"
                cols="30"
                rows="10"
              ></textarea>
              <input type="text" placeholder="cost" />
              <button onClick={(e) => e.preventDefault()}>add product</button>
            </form>
          </div>
        ) : (
          ""
        )}

        {allProducts === false &&
        addProduct === false &&
        viewOrders === true ? (
          <div className="ordersContainer">
            <div className="ordersTitle">orders</div>
            {data.orders.map((order) => (
              <div className="orderContainer">
                <div>***</div>
                <div>{`date: ${order.date}`}</div>
                <div>{`order id: ${order.id}`}</div>
                <div>{`product id: ${order.productId}`}</div>
                <div>{`name of the product: ${order.productName}`}</div>
                <div>{`type: ${order.type}`}</div>
                <div>{`cost: ${order.cost}`}</div>
                <div>{`name of the client: ${order.nameOfClient}`}</div>
                <div>{`client's address: ${order.adress}`}</div>
                <div>{`order status: ${order.status}`}</div>
                <div>***</div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
