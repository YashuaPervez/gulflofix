import React from "react";

// Components
import Container from "../UI/Container";
import Button from "../UI/Button";

//
import "./index.scss";

const ImageContent = ({
  imgUrl,
  children,
  buttonText = "Get Started Now",
  buttonColor,
  heading,
}) => {
  return (
    <section className="section">
      <Container>
        <div className="common-image-content">
          {imgUrl && (
            <div className="common-image-content-image">
              <img src={imgUrl} />
            </div>
          )}
          <div className="common-image-content-content">
            {heading && (
              <h3 className="heading-small color-dark mb-sm">{heading}</h3>
            )}
            {children}
            {buttonText && <Button color={buttonColor}>{buttonText}</Button>}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ImageContent;
