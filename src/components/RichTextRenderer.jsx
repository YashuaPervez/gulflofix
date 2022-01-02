import React from "react";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const RichTextRenderer = ({ richText, config }) => {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className={config?.p || ""}>{children}</p>
      ),
    },
  };

  return renderRichText(richText, options);
};

export default RichTextRenderer;
