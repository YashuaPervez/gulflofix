import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";

// Components
import Container from "../../../components/UI/Container";
import Paper from "../../../components/UI/Paper";
// import Button from "../../../components/UI/Button";
import Cards from "../../../components/Cards";

//
import "./index.scss";
// import BGImage from "../../../images/home-services-background.svg";
// import OfficeImage from "../../../images/home-services-2/office.svg";
// import PowerImage from "../../../images/home-services-2/power.png";
// import ShareImage from "../../../images/home-services-2/share.svg";

const Services = ({ data }) => {
  return (
    <section className="home-services">
      <div className="home-services-background">
        <StaticImage
          src="../../../images/home-services-background.svg"
          loading="lazy"
          placeholder="tracedSVG"
        />
      </div>
      <div className="home-services-content">
        <Container>
          <h2 className="heading-section color-dark mb-lg">
            {data?.servicesTitle}
          </h2>
          <div className="mb-lg">
            <Cards cards={data?.servicesList} />
          </div>
          <h2 className="heading-section color-dark mb-lg">
            {data?.servicesTitle2}
          </h2>
          <p className="mb-lg text-lg text-gray">{data?.servicesDescription}</p>
          <div className="home-services-grid">
            {data?.servicesList2?.map((service) => {
              const image = getImage(service.image);

              return (
                <Paper>
                  <div className="services-item-2 orange">
                    <div className="services-item-2-image">
                      {image ? (
                        <GatsbyImage image={image} loading="lazy" />
                      ) : (
                        <img src={service.image.file.url} />
                      )}
                    </div>
                    <div className="services-item-2-body">
                      <h3 className="services-item-2-heading">
                        {service.title}
                      </h3>
                      <Link to={service.buttonLink}>
                        <span className="underline">{service.buttonText}</span>
                      </Link>
                    </div>
                  </div>
                </Paper>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Services;
