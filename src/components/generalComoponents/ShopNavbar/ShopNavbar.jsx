import React from "react";
// state hook for production
import { useState } from "react";

// styles
import "./ShopNavbar.scss";

export const ShopNavbar = () => {
  // production state
  const [isItJ, setIsItJ] = useState(true);

  return (
    <div className="shopNavbarContainer">
      <div onClick={() => setIsItJ(true)}>Jewellery</div>
      <div onClick={() => setIsItJ(false)}>Prints</div>
    </div>
  );
};
