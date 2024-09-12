import React from "react";

// redux
import { useSelector } from "react-redux";

// styles
import "./AboutPage.scss";

export const AboutPage = () => {
  // redux || state || reducers
  const staticImages = useSelector((state) => state.imagesSlice);
  const staticText = useSelector((state) => state.textSlice);

  return (
    <div className="aboutPageContainer">
      <div>
        <img src={staticImages.aboutImageUrl} alt="aboutImage" />
      </div>
      <div className="aboutTextContainer">
        <p> {staticText.aboutText}</p>
      </div>
    </div>
  );
};
