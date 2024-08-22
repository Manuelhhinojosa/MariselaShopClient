import React from "react";

// syles
import "./FaqPage.scss";

// page text
import questionsAndAnswers from "../../../assets/data/data";

export const FaqPage = () => {
  return (
    <div className="faqPageContainer">
      <div className="faqContainer">
        {questionsAndAnswers.questionsAndAnswers.map((el, i) => (
          <div qAC>{el}</div>
        ))}
      </div>
    </div>
  );
};
