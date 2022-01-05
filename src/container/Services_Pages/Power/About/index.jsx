import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

// Components
import Container from "../../../../components/UI/Container";
import Button from "../../../../components/UI/Button";
import RichTextRenderer from "../../../../components/RichTextRenderer";

//
import "./index.scss";

const About = ({ data }) => {
  const image = getImage(data?.content?.image);

  return (
    <section className="section services-power-about-section">
      <Container>
        <div className="services-power-about">
          <div className="services-power-about-image">
            <GatsbyImage loading="lazy" image={image} />
          </div>
          <div className="services-power-about-content">
            <RichTextRenderer
              richText={data?.content?.body}
              config={{
                p: "text-sm color-gray-2 mb-sm",
              }}
            />
            <Link to={data?.content?.buttonLink}>
              <Button color="yellow">{data?.content?.buttonText}</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
