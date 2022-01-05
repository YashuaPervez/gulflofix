import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// Components
import Container from "../../../../components/UI/Container";
import RichTextRenderer from "../../../../components/RichTextRenderer";

//
import "./index.scss";

const Apps2 = ({ data }) => {
  return (
    <section className="section">
      <Container>
        {data?.services2?.map((item) => {
          const image = getImage(item.image);

          return (
            <div className="services-power-apps2-item">
              <div className="services-power-apps2-item-image">
                <GatsbyImage loading="lazy" image={image} />
              </div>
              <div className="services-power-apps2-item-content">
                <h3 className="heading-section color-dark mb-sm">
                  {item.title}
                </h3>
                <RichTextRenderer
                  richText={item.description}
                  config={{
                    p: "color-dark text-sm mb-sm",
                  }}
                />
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
};

export default Apps2;
