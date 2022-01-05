import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// Components
import Container from "../../../../components/UI/Container";
import Paper from "../../../../components/UI/Paper";

//
import "./index.scss";

const Features = ({ data }) => {
  return (
    <section className="section">
      <Container>
        <h2 className="heading-section color-dark mb-lg">
          {data?.servicesTitle}
        </h2>
        <Paper>
          <div className="services-share-features-grid">
            {data?.services?.map((item) => {
              const image = getImage(item?.image);

              return (
                <div className="services-share-features-item">
                  <div className="mb-md">
                    <GatsbyImage loading="eager" image={image} />
                  </div>
                  <h3 className="color-dark heading-small mb-md">
                    {item.title}
                  </h3>
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
