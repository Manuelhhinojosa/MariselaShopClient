import React from "react";

// styles
import "./AboutPage.scss";

// images
import aboutImgUrl from "../../../assets/data/data.js";
// page text

import aboutPageText from "../../../assets/data/data.js";

export const AboutPage = () => {
  return (
    <div className="aboutPageContainer">
      <div>
        <img src={aboutImgUrl.aboutImgUrl} alt="aboutImage" />
      </div>
      <div className="aboutTextContainer">
        <p> {aboutPageText.aboutPageText}</p>
      </div>
    </div>
  );
};
