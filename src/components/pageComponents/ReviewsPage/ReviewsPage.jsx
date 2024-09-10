import React from "react";

//styles
import "./ReviewsPage.scss";

// text data
import data from "../../../assets/data/data";

export const ReviewsPage = () => {
  return (
    <div className="reviewsPageContainer">
      <div className="reviewsContainer">
        <div>reviews</div>
        {data.reviews.map((el, i) => (
          <div key={i}>
            "{el.review}" By {el.author}
          </div>
        ))}
      </div>
    </div>
  );
};
