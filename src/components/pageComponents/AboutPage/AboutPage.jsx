import React from "react";

// styles
import "./AboutPage.scss";

// data
import data from "../../../assets/data/data.js";

export const AboutPage = () => {
  return (
    <div className="aboutPageContainer">
      <div>
        <img src={data.aboutImgUrl} alt="aboutImage" />
      </div>
      <div className="aboutTextContainer">
        <p> {data.aboutPageText}</p>
      </div>
    </div>
  );
};
