import { Fragment } from "react";
import Blocks from "../Blocks";

function BlockGroup({ innerBlocks, layout }) {
  return (
    <section
      style={{ maxWidth: layout?.contentSize }}
      className="mx-auto mb-12"
    >
      {innerBlocks?.map((innerBlock, index) => {
        return (
          <Fragment key={index}>
            {innerBlock && <Blocks blocks={[innerBlock]} />}
          </Fragment>
        );
      })}
    </section>
  );
}

export default BlockGroup;
