import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

// Components
import Paper from "../UI/Paper";
import RichTextRenderer from "../RichTextRenderer";

//
import "./index.scss";

const Features = ({ features, learnMoreLink = "/about-us" }) => {
  return (
    <Paper>
      <div className="features">
        <div className="cta">
          <p className="text-xs color-gray-2">
            <Link to={learnMoreLink} className="color-purple">
              LEARN MORE
            </Link>{" "}
            about what we offer
          </p>
        </div>
        {features?.map((feat) => {
          const image = getImage(feat.image);

          return (
            <div className="feature-item">
              <div className="feature-item-image">
                <GatsbyImage image={image} loading="eager" />
              </div>
              <h3 className="heading-small feature-item-heading">
                {feat.title}
              </h3>
              <p className="text-xs color-gray-2 feature-item-desc">
                <RichTextRenderer richText={feat.description} />
              </p>
            </div>
          );
        })}
      </div>
    </Paper>
  );
};

export default Features;
