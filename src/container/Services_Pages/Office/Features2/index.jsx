import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// Componenets
import Container from "../../../../components/UI/Container";
import RichTextRenderer from "../../../../components/RichTextRenderer";

//
import "./index.scss";

const Features2 = ({ data }) => {
  return (
    <section>
      <Container>
        <div className="services-office-feature2-grid">
          {data?.featuresList2?.map((item) => {
            const image = getImage(item.image);

            return (
              <div className="services-office-feature2-grid-item">
                <div className="mb-sm">
                  <GatsbyImage loading="lazy" image={image} />
                </div>
                <h2 className="color-dark heading-small mb-sm">{item.title}</h2>
                <RichTextRenderer
                  richText={item.description}
                  config={{
                    p: "color-gray-2 text-sm",
                  }}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Features2;
