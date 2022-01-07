import React from "react";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

// Components
import RichTextRenderer from "../../../../components/RichTextRenderer";
import Container from "../../../../components/UI/Container";
import Button from "../../../../components/UI/Button";

//
// import otherImage from "../../../../images/office-365-blob.png";
import "./index.scss";

const Description = ({ data }) => {
  const image = getImage(data?.content?.image);

  return (
    <section className="section office-description-container">
      <div className="image">
        <StaticImage
          loading="lazy"
          placeholder="tracedSVG"
          src="../../../../images/office-365-blob.png"
        />
      </div>
      <div className="content">
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
      </div>
    </section>
  );
};

export default Description;
