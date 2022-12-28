import React from "react";

interface BlockHeadingProps {
  level: string;
  content: string;
  textAlign: string;
}

const BlockHeading: React.FC<BlockHeadingProps> = ({
  level,
  content,
  textAlign,
}) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  const styleMapping = {
    h2: `text-gray-50 text-xl pt-3 pb-2 text-${textAlign}`,
    h3: `text-gray-50 text-lg pt-3 pb-2 text-${textAlign}`,
  };
  return (
    <HeadingTag className={styleMapping[HeadingTag]}>{content}</HeadingTag>
  );
};

export default BlockHeading;
