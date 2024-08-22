import React from "react";

// syles
import "./Home.scss";

// images
import homeImgUrl from "../../../assets/data/data.js";

export const Home = () => {
  return (
    <div className="homePageContainer">
      <div>
        <img src={homeImgUrl.homeImgUrl} alt="Home-Image" />
      </div>
    </div>
  );
};
