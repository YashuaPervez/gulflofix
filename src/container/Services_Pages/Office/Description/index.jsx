import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

// Components
import RichTextRenderer from "../../../../components/RichTextRenderer";
import Container from "../../../../components/UI/Container";
import Button from "../../../../components/UI/Button";

//
import "./index.scss";

const Description = ({ data }) => {
  const image = getImage(data?.content?.image);

  return (
    <section className="section">
      <Container>
        <div className="services-office-description-grid">
          <div className="services-office-description-image">
            <GatsbyImage image={image} loading="lazy" />
          </div>
          <div className="services-office-description-content">
            <RichTextRenderer richText={data?.content?.body} />

            <Link to={data?.content?.buttonLink}>
              <Button color="orange">{data?.content?.buttonText}</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Description;
