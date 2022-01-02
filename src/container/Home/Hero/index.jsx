import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// Components
import Container from "../../../components/UI/Container";
import Button from "../../../components/UI/Button";

//
// import HeroBgImage from "../../../images/home-banner-bg.png";
import "./index.scss";

const Hero = ({ data }) => {
  return (
    <section className="home-hero">
      <div className="bg-image">
        <StaticImage
          src="../../../images/home-banner-bg.png"
          loading="eager"
          placeholder="blurred"
        />
      </div>
      <Container>
        <div className="home-hero-content-wrapper">
          <div className="home-hero-content">
            <h2 className="heading-thin home-hero-heading">
              {data?.heroTitle}
              <br />
              <span className="highlight">
                <span className="text">{data?.heroTitleBold}</span>
              </span>
            </h2>
            <p className="text-md home-hero-text">
              {data?.heroDescription?.heroDescription}
            </p>
            {data?.heroButtonText && data?.heroButtonLink && (
              <Link to={data?.heroButtonLink}>
                <Button>{data?.heroButtonText}</Button>
              </Link>
            )}
          </div>
          <div className="home-hero-spacer"></div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
