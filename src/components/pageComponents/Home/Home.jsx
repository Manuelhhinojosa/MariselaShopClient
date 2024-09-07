import React from "react";

// syles
import "./Home.scss";

// images
import data from "../../../assets/data/data.js";

export const Home = () => {
  return (
    <div className="homePageContainer">
      <div className="test">
        RIGA
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          dolor dicta? Praesentium tempora quas rem voluptatibus officia facilis
          mollitia, in quidem veniam molestiae nostrum alias fugiat nihil
          repudiandae iste at. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Reprehenderit magnam animi dolor sapiente eum rerum
          molestiae maxime. Pariatur eum eligendi modi! Laudantium ratione ullam
          dignissimos. Ullam dicta sequi maxime ut!
        </span>
      </div>
      <div>
        <div>
          <img src={data.homeImgUrl2} alt="Home-Image" />
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          dolor dicta? Praesentium tempora quas rem voluptatibus officia facilis
          mollitia, in quidem veniam molestiae nostrum alias fugiat nihil
          repudiandae iste at. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Reprehenderit magnam animi dolor sapiente eum rerum
          molestiae maxime. Pariatur eum eligendi modi! Laudantium ratione ullam
          dignissimos. Ullam dicta sequi maxime ut!
        </div>
      </div>
    </div>
  );
};
