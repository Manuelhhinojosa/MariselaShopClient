import React from "react";

//styles
import "./ReviewsPage.scss";

// ract icons
import { FaStar } from "react-icons/fa";

// redux
import { useSelector } from "react-redux";

export const ReviewsPage = () => {
  // redux || state || reducers
  const productionState = useSelector((state) => state.productsStateSlice);

  return (
    <div className="reviewsPageContainer">
      <div className="reviewsContainer">
        <div>reviews</div>
        {productionState.reviews.map((el, i) => (
          <div key={i}>
            "{el.review}"<br /> <br />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <br />
            <span>By {el.author}.</span>
          </div>
        ))}
      </div>
    </div>
  );
};
