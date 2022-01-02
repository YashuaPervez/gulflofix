import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// Components
import Container from "../../../components/UI/Container";
import RichTextRenderer from "../../../components/RichTextRenderer";

//
import "./index.scss";
// import MicrosoftPartnerImage from "../../../images/microsoft-partner-logo.png";

const Parther = ({ data }) => {
  const image = getImage(data?.partner?.image);

  return (
    <section className="section about-partner">
      <Container className="c-small">
        <div className="about-partner-content">
          <div className="about-partner-image">
            <GatsbyImage image={image} loading="eager" />
            {/* <img src={MicrosoftPartnerImage} /> */}
          </div>
          <div className="about-partner-body">
            <RichTextRenderer
              richText={data?.partner?.body}
              config={{
                p: "text-sm color-gray-2 about-partner-text mb-sm",
              }}
            />
            {/* <p className="text-sm color-gray-2 about-partner-text mb-sm">
              With multiple successful projects on Microsoft Platforms, Gulf
              Logix offers world class consulting on the Microsoft Product
              stack.
            </p>
            <p className="text-sm color-gray-2 about-partner-text mb-sm">
              We are a unique company that has exemplary skills in automation
              and low code collaboration and workflow platforms, making us the
              ideal choice for business process automation, employee engagement
              & digital transformation initiatives.
            </p> */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Parther;
