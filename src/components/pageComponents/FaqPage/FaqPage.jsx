import React from "react";

// syles
import "./FaqPage.scss";

// redux
import { useSelector } from "react-redux";

export const FaqPage = () => {
  // redux || state || reducers
  const productionState = useSelector((state) => state.productsStateSlice);

  return (
    <div className="faqPageContainer">
      <div className="faqContainer">
        <div>faqs</div>
        {productionState.questionsAndAnswers.map((el, i) => (
          <div>{el}</div>
        ))}
      </div>
    </div>
  );
};
