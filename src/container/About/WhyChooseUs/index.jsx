import React from "react";

//
import "./index.scss";
import WhoChooseUsImage from "../../../images/about-why-choose-us.png";

const WhyChooseUs = () => {
  return (
    <div className="about-why-choose-us">
      <div className="about-why-choose-us-container">
        <div className="about-why-choose-us-image">
          <img src={WhoChooseUsImage} />
        </div>
        <div className="about-why-choose-us-content">
          <h2 className="heading-section text-dark mb-sm">Why choose us?</h2>
          <p className="text-sm color-gray-2 mb-sm">
            Through{" "}
            <strong className="color-dark">digital transformation,</strong> we
            help you create a team culture, improve business performance, and
            optimize customer service.
          </p>
          <p className="text-sm color-gray-2 mb-sm">
            We are here to help at any stage of your digital transformation
            journey.
          </p>
          <p className="text-sm color-gray-2 mb-sm">
            You will receive a personal and friendly service, and the
            reassurance of working with a professional service provider.
          </p>
          <p className="text-sm color-gray-2 mb-sm">
            You get straight-forward advice that focuses on your specific goals
            with measurable results. Our flexible approach and efficiency means
            we’ll fit to your priorities and timelines.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
