import React from "react";

function BlockHeading({ level, content, textAlign }) {
  const HeadingTag = `h${level}`;
  const styleMapping = {
    h2: `text-gray-50 text-xl pt-3 pb-2 text-${textAlign}`,
    h3: `text-gray-50 text-lg pt-3 pb-2 text-${textAlign}`,
  };
  return (
    <HeadingTag className={styleMapping[HeadingTag]}>{content}</HeadingTag>
  );
}

export default BlockHeading;
