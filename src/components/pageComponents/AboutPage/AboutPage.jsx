import React from "react";

// styles
import "./AboutPage.scss";

// images
import aboutImgUrl from "../../../assets/data/data.js";

export const AboutPage = () => {
  return (
    <div className="aboutPageContainer">
      <div>
        <img src={aboutImgUrl.aboutImgUrl} alt="aboutImage" />
      </div>
      <div className="aboutTextContainer">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
          porro alias debitis inventore eius reprehenderit ratione similique,
          nulla consectetur iste velit, ipsum impedit, dolores est tenetur
          pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Aliquam porro alias debitis inventore eius
          reprehenderit ratione similique, nulla consectetur iste velit, ipsum
          impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Aliquam porro alias
          debitis inventore eius reprehenderit ratione similique, nulla
          consectetur iste velit, ipsum impedit, dolores est tenetur pariatur
          deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Aliquam porro alias debitis inventore eius reprehenderit ratione
          similique, nulla consectetur iste velit, ipsum impedit, dolores est
          tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Aliquam porro alias debitis inventore
          eius reprehenderit ratione similique, nulla consectetur iste velit,
          ipsum impedit, dolores est tenetur pariatur deserunt vel ad.
        </p>
      </div>
    </div>
  );
};
