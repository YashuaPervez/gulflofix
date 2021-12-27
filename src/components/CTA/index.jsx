import React from "react";
import { Link } from "gatsby";

//
import "./index.scss";

const CTA = ({
  headingText,
  heading2Text,
  ctaText,
  ctaLink,
  headingClasses = "",
  heading2Classes = "",
  ctaClasses = "",
}) => {
  return (
    <div className="common-cta">
      {headingText && (
        <h2 className={`mb-sm ${headingClasses}`}>{headingText}</h2>
      )}
      {heading2Text && (
        <h3 className={`mb-sm ${heading2Classes}`}>{heading2Text}</h3>
      )}
      {ctaText && ctaLink && (
        <Link to={ctaLink} className={`underline ${ctaClasses}`}>
          {ctaText}
        </Link>
      )}
    </div>
  );
};

export default CTA;
