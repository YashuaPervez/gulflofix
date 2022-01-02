import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// Components
import Container from "../../../components/UI/Container";
import RichTextRenderer from "../../../components/RichTextRenderer";

//
import OurSolutionsImage from "../../../images/about-solution.png";
import "./index.scss";

const OurSolution = ({ data }) => {
  const image = getImage(data?.solution?.image);

  return (
    <div className="section">
      <Container>
        <div className="about-oursolution-grid">
          <div className="about-oursolution-image">
            <GatsbyImage image={image} loading="lazy" />
          </div>
          <div className="about-oursolution-content">
            <h2 className="heading-small color-dark mb-sm">
              {data?.solution?.title}
            </h2>
            <RichTextRenderer
              richText={data?.solution?.body}
              config={{
                p: "text-sm color-gray-2 mb-sm",
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurSolution;
