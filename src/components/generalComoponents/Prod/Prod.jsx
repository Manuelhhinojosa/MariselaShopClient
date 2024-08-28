import React from "react";

// react router v6
import { Link } from "react-router-dom";

//styles
import "./Prod.scss";

// production state
import isItJ from "../../../assets/data/data";
import jArr from "../../../assets/data/data";
import printsArr from "../../../assets/data/data";

export const Prod = () => {
  return (
    <>
      {isItJ.isItJ
        ? jArr.jArr.map((j) => (
            <div className="Container">
              <div className="imgContainer">
                <Link to={`/shop/${j.id}`}>
                  <img src={j.img} alt="" />
                </Link>
              </div>
              <div className="textContainer">
                <div className="left">
                  <div>{j.title}</div>
                  <div>{j.shortDesc}</div>
                  <div>{j.cost}</div>
                </div>
                <div className="right">
                  <div>{j.available ? "available" : "not available"}</div>
                  <div>Add to cart</div>
                </div>
              </div>
            </div>
          ))
        : printsArr.printsArr.map((p) => (
            <div className="Container">
              <div className="imgContainer">
                <Link to={`/shop/${p.id}`}>
                  <img src={p.img} alt="" />
                </Link>
              </div>
              <div className="textContainer">
                <div className="left">
                  <div>{p.title}</div>
                  <div>{p.shortDesc}</div>
                  <div>{p.cost}</div>
                </div>
                <div className="right">
                  <div>{p.available ? "available" : "not available"}</div>
                  <div>Add to cart</div>
                </div>
              </div>
            </div>
          ))}
    </>
  );
};
