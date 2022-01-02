import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

// Components
import Paper from "../UI/Paper";
import Button from "../UI/Button";
import RichTextRenderer from "../RichTextRenderer";

//
import "./index.scss";
import CodeImage from "../../images/home-services/code.png";
import DegreeImage from "../../images/home-services/degree.png";
import StatsImage from "../../images/home-services/stats.png";

const Cards = ({ heading, cards, paperProps }) => {
  return (
    <>
      {heading && (
        <h2 className="heading-section color-dark mb-lg">{heading}</h2>
      )}
      <div className="card-grid">
        {cards?.map((card) => {
          const image = getImage(card.image);

          return (
            <Paper {...paperProps}>
              <div className="card-item">
                <div className="card-image mb-md">
                  <GatsbyImage image={image} loading="lazy" />
                </div>
                <h3 className="card-heading mb-sm color-pink heading-small">
                  {card.title}
                </h3>
                <RichTextRenderer
                  richText={card.description}
                  config={{
                    p: "text-sm mb-sm color-gray-2 card-text",
                  }}
                />
                <Link to={card.buttonLink}>
                  <Button color="pink">{card.buttonText}</Button>
                </Link>
              </div>
            </Paper>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
