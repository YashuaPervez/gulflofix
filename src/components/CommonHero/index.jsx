import React from "react";
import { Link } from "gatsby";

// Components
import Button from "../UI/Button";

//
import "./index.scss";

const CommonHero = ({
  bgImage,
  BgImage,
  logo,
  title,
  titleClasses,
  title2,
  title3,
  buttonColor,
  buttonText = "Get Started Now",
  buttonLink = "https://www.gulflogix.ae/online-store/",
}) => {
  return (
    <section className="common-hero">
      {BgImage && <BgImage />}
      <img src={logo} className="common-hero-logo" />
      <div className="common-hero-content">
        {title && (
          <h1 className={`heading-xl mb-lg common-hero-title ${titleClasses}`}>
            {title}
          </h1>
        )}
        {title2 && <h2 className="common-hero-title2 mb-lg">{title2}</h2>}
        {title3 && <h3 className="common-hero-title3 mb-lg">{title3}</h3>}
        {buttonText && (
          <Link to={buttonLink} className="common-hero-button">
            <Button color={buttonColor}>{buttonText}</Button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default CommonHero;
