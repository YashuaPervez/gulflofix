import React, { useRef, useEffect } from "react";

// Components
import Button from "../UI/Button";

//
import "./index.scss";

const CommonHero = ({
  bgImage,
  logo,
  title,
  titleClasses,
  title2,
  title3,
  buttonColor,
  buttonText = "Get Started Now",
}) => {
  const imageRef = useRef();

  useEffect(() => {
    const height = imageRef.current.clientHeight;
    const width = imageRef.current.clientWidth;

    console.log({ height, width });
  }, []);

  return (
    <section className="common-hero">
      <img src={bgImage} className="common-hero-image" ref={imageRef} />
      <img src={logo} className="common-hero-logo" />
      <div className="common-hero-content">
        {title && (
          <h1 className={`heading-xl mb-lg ${titleClasses}`}>{title}</h1>
        )}
        {title2 && <h2 className="common-hero-title2 mb-lg">{title2}</h2>}
        {title3 && <h3 className="common-hero-title3 mb-lg">{title3}</h3>}
        {buttonText && <Button color={buttonColor}>{buttonText}</Button>}
      </div>
    </section>
  );
};

export default CommonHero;
