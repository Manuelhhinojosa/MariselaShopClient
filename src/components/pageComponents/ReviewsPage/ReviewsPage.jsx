import React from "react";

//styles
import "./ReviewsPage.scss";

// text data
import reviews from "../../../assets/data/data";

export const ReviewsPage = () => {
  return (
    <div className="reviewsPageContainer">
      <div className="reviewsContainer">
        {reviews.reviews.map((el, i) => (
          <div key={i}>
            "{el.review}" By {el.author}
          </div>
        ))}
      </div>
    </div>
  );
};
