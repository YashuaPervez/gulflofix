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
            {children}
            {buttonText && <Button color={buttonColor}>{buttonText}</Button>}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ImageContent;
