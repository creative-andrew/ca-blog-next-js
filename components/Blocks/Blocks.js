import React from "react";
import BlockParagraph from "./BlockParagraph/BlockParagraph";
import BlockGroup from "./BlockGroup/BlockGroup";
import BlockImage from "./BlockImage/BlockImage";
import BlockHeading from "./BlockHeading/BlockHeading";
function Blocks({ blocks }) {
  return (
    <>
      {!!blocks?.length &&
        blocks.map((block, index) => {
          const { attributes, name, innerBlocks } = block;
          switch (name) {
            case "core/paragraph": {
              return <BlockParagraph {...attributes} key={index} />;
            }
            case "core/image": {
              return <BlockImage {...attributes} key={index} />;
            }
            case "core/group": {
              return (
                <BlockGroup
                  {...attributes}
                  key={index}
                  innerBlocks={innerBlocks}
                />
              );
            }
            case "core/heading": {
              return <BlockHeading {...attributes} key={index} />;
            }
          }
        })}
    </>
  );
}

export default Blocks;
