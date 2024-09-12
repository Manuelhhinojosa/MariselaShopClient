import React from "react";

// redux
import { useSelector } from "react-redux";

// syles
import "./Home.scss";

export const Home = () => {
  // redux || state
  const homeTitle = useSelector((state) => state.home.homeTitle);
  const homeImg = useSelector((state) => state.home.homeUrl);
  const homeText = useSelector((state) => state.home.homeText);

  return (
    <div className="homePageContainer">
      <div className="test">
        {homeTitle}
        <span>{homeText}</span>
      </div>
      <div>
        <div>
          {/* <img src={data.homeImgUrl2} alt="Home-Image" /> */}
          <img src={homeImg} alt="Home-Image" />
        </div>
        <div>{homeText}</div>
      </div>
    </div>
  );
};
