import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

// Components
import Container from "../UI/Container";
import Button from "../UI/Button";

//
import "./index.scss";

const ImageContent = ({
  image,
  children,
  buttonText = "Get Started Now",
  buttonLink = "",
  buttonColor,
  heading,
}) => {
  const imageToPass = getImage(image);

  return (
    <section className="section">
      <Container>
        <div className="common-image-content">
          {imageToPass && (
            <div className="common-image-content-image">
              <GatsbyImage image={imageToPass} loading="eager" />
            </div>
          )}
          <div className="common-image-content-content">
            {heading && (
              <h3 className="heading-small color-dark mb-sm">{heading}</h3>
            )}
            {children}
            {buttonText && (
              <Link to={buttonLink}>
                <Button color={buttonColor}>{buttonText}</Button>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ImageContent;
