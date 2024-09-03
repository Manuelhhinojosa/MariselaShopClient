import React from "react";

//styles
import "./ReviewsPage.scss";

// text data
import reviews from "../../../assets/data/data";

export const ReviewsPage = () => {
  return (
    <div className="reviewsPageContainer">
      <div className="reviewsContainer">
        <div>Client's reviews</div>
        {reviews.reviews.map((el, i) => (
          <div key={i}>
            "{el.review}" By {el.author}
          </div>
        ))}
      </div>
    </div>
  );
};
