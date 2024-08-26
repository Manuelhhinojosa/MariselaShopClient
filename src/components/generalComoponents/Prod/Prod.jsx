import React from "react";

//styles
import "./Prod.scss";

// production state
import isItJ from "../../../assets/data/data";
import jArr from "../../../assets/data/data";
import printsArr from "../../../assets/data/data";

export const Prod = () => {
  return (
    <>
      {isItJ.isItJ ? (
        jArr.jArr.map((j) => (
          <div className="jContainer">
            <div className="imgContainer">
              <img src={j.img} alt="" />
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
      ) : (
        <div className="pContainer">Print</div>
      )}
    </>
  );
};
