import React from "react";

// syles
import "./FaqPage.scss";

// page text
import data from "../../../assets/data/data";

export const FaqPage = () => {
  return (
    <div className="faqPageContainer">
      <div className="faqContainer">
        <div>faqs</div>
        {data.questionsAndAnswers.map((el, i) => (
          <div qAC>{el}</div>
        ))}
      </div>
    </div>
  );
};
