import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import RichTextRenderer from "../../../../components/RichTextRenderer";

// Components
import Container from "../../../../components/UI/Container";
import Paper from "../../../../components/UI/Paper";

//
import "./index.scss";

const Features = ({ data }) => {
  return (
    <section className="section">
      <Container>
        <h3 className="mb-lg heading-section color-dark">
          {data?.featuresTitle}
        </h3>
        <Paper>
          <div className="services-office-features-grid">
            {data?.featuresList?.map((item) => {
              const image = getImage(item.image);

              return (
                <div className="services-office-features-item">
                  <div className="services-office-features-item-image">
                    <GatsbyImage loading="eager" image={image} />
                  </div>
                  <div className="services-office-features-item-body">
                    <h3 className="color-dark heading-small">{item.title}</h3>
                    <RichTextRenderer
                      richText={item.description}
                      config={{
                        p: "color-gray-2 text-sm",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Paper>
      </Container>
    </section>
  );
};

export default Features;
