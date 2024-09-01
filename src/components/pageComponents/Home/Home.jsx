import React from "react";

// syles
import "./Home.scss";

// images
import homeImgUrl from "../../../assets/data/data.js";
import homeImgUrl2 from "../../../assets/data/data.js";
import data from "../../../assets/data/data.js";

export const Home = () => {
  return (
    <div className="homePageContainer">
      <div className="test">RIGA</div>
      <div>
        <div>
          <img src={homeImgUrl2.homeImgUrl2} alt="Home-Image" />
        </div>
        <div>
          <img src={homeImgUrl.homeImgUrl} alt="Home-Image" />
        </div>
      </div>
    </div>
  );
};
