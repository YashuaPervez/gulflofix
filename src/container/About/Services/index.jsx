import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import RichTextRenderer from "../../../components/RichTextRenderer";

// Components
import Container from "../../../components/UI/Container";
import Paper from "../../../components/UI/Paper";

//
import "./index.scss";
// import AnalysisImage from "../../../images/about-services/analysis.png";

const Services = ({ data }) => {
  return (
    <section className="section">
      <Container>
        <div className="about-services">
          <h2 className="heading-section color-dark mb-sm about-services-heading">
            {data?.implementationTitle}
          </h2>
          <p className="about-services-text text-sm color-gray-2 mb-md">
            {data?.implementationDescription}
          </p>
          <h3 className="heading-small color-dark mb-lg">
            {data?.implementationSubtitle}
          </h3>
          <div className="about-services-discovery">
            <Paper type="outlined">
              <div className="about-services-grid">
                {data?.implementationList?.map((item) => {
                  const image = getImage(item?.image);

                  return (
                    <div className="about-services-item">
                      <div className="mb-md">
                        <GatsbyImage image={image} loading="lazy" />
                      </div>
                      <h3 className="heading-small color-dark mb-sm">
                        {item?.title}
                      </h3>
                      <RichTextRenderer
                        richText={item?.description}
                        config={{
                          p: "text-sm color-gray-2 about-services-item-text",
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </Paper>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
