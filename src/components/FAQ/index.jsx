import React, { useState } from "react";

//
import { DownArrow } from "../icons";
import "./index.scss";

const FAQ = ({ title, faqs }) => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const changeActiveQuestion = (index) => {
    if (index === activeQuestion) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);
    }
  };

  return (
    <div className="faq-list">
      {title && <h2 className="faq-title mb-lg">{title}</h2>}
      {faqs?.map((q, i) => (
        <div
          className={`faq-item mb-sm ${activeQuestion === i ? "active" : ""}`}
        >
          <div
            className="faq-item-question"
            onClick={() => changeActiveQuestion(i)}
          >
            <span className="faq-item-question-text">{q.question}</span>
            <div className="arrow">
              <DownArrow color={activeQuestion === i ? "#007dff" : "#000"} />
            </div>
          </div>
          <div className="faq-item-answer text-sm color-dark">{q.answer}</div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
