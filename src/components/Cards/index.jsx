import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

// Components
import Paper from "../UI/Paper";
import Button from "../UI/Button";
import RichTextRenderer from "../RichTextRenderer";

//
import "./index.scss";

const Cards = ({ heading, cards, paperProps, colors }) => {
  return (
    <>
      {heading && (
        <h2 className="heading-section color-dark mb-lg">{heading}</h2>
      )}
      <div className="card-grid">
        {cards?.map((card, i) => {
          const image = getImage(card.image);

          const remainder = i % 3;
          let color = "";

          if (colors) {
            color = colors[remainder];
          } else {
            switch (remainder) {
              case 0:
                color = "pink";
                break;
              case 1:
                color = "blue";
                break;
              case 2:
                color = "purple";
                break;
            }
          }

          return (
            <Paper {...paperProps}>
              <div className="card-item">
                <div className="card-image mb-md">
                  <GatsbyImage image={image} loading="lazy" />
                </div>
                <h3
                  className={`card-heading mb-sm color-${color} heading-small`}
                >
                  {card.title}
                </h3>
                <div className="card-text-wrapper">
                  <RichTextRenderer
                    richText={card.description}
                    config={{
                      p: "text-sm mb-sm color-gray-2 card-text",
                    }}
                  />
                </div>
                <Link
                  to={card.buttonLink}
                  target={card.openInNewTab ? "_blank" : undefined}
                >
                  <Button color={color}>{card.buttonText}</Button>
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
