import React from "react";

// redux
import { useSelector } from "react-redux";

// syles
import "./Home.scss";

export const Home = () => {
  // redux || state
  const homeState = useSelector((state) => state.homeState);

  return (
    <div className="homePageContainer">
      <div className="test">
        {homeState.homeTitle}
        <span>{homeState.homeText}</span>
      </div>
      <div>
        <div>
          <img src={homeState.homeUrl} alt="Home-Image" />
        </div>
        <div>{homeState.homeText}</div>
      </div>
    </div>
  );
};
