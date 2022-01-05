import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// Components
import Container from "../../../../components/UI/Container";
import Paper from "../../../../components/UI/Paper";
import RichTextRenderer from "../../../../components/RichTextRenderer";

//
import "./index.scss";

const Apps = ({ data }) => {
  return (
    <section className="section">
      <Container>
        <h2 className="heading-section color-dark mb-lg">
          {data.servicesTitle}
        </h2>
        <Paper type="outlined">
          <div className="services-power-apps-grid">
            {data?.services?.map((item) => {
              const image = getImage(item.image);

              return (
                <div className="services-power-apps-item">
                  <div className="mb-md">
                    <GatsbyImage loading="lazy" image={image} />
                  </div>
                  <h3 className="color-dark heading-small mb-md">
                    {item.title}
                  </h3>
                  <RichTextRenderer
                    config={{
                      p: "text-sm color-gray-2",
                    }}
                    richText={item.description}
                  />
                </div>
              );
            })}
          </div>
        </Paper>
      </Container>
    </section>
  );
};

export default Apps;
