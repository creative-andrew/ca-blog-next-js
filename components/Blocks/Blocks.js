import React from "react";
import BlockParagraph from "./BlockParagraph/BlockParagraph";

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
          }
        })}
    </>
  );
}

export default Blocks;
