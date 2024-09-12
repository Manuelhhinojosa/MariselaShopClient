import React from "react";

//styles
import "./ReviewsPage.scss";

// ract icons
import { FaStar } from "react-icons/fa";

// text data
import data from "../../../assets/data/data";

export const ReviewsPage = () => {
  return (
    <div className="reviewsPageContainer">
      <div className="reviewsContainer">
        <div>reviews</div>
        {data.reviews.map((el, i) => (
          <div key={i}>
            "{el.review}"<br /> <br />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <br />
            <br />
            <span>By {el.author}.</span>
          </div>
        ))}
      </div>
    </div>
  );
};
