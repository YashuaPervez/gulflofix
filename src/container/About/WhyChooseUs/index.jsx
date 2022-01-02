import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// Components
import RichTextRenderer from "../../../components/RichTextRenderer";

//
import "./index.scss";
// import WhoChooseUsImage from "../../../images/about-why-choose-us.png";

const WhyChooseUs = ({ data }) => {
  const image = getImage(data?.whyChoose?.image);

  return (
    <div className="about-why-choose-us">
      <div className="about-why-choose-us-background"></div>
      <div className="about-why-choose-us-container">
        <div className="about-why-choose-us-image">
          <GatsbyImage image={image} loading="lazy" />
          {/* <img src={WhoChooseUsImage} /> */}
        </div>
        <div className="about-why-choose-us-content">
          <h2 className="heading-section text-dark mb-sm">
            {data?.whyChoose?.title}
          </h2>
          <RichTextRenderer
            richText={data?.whyChoose?.body}
            config={{
              p: "text-sm color-gray-2 mb-sm",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
