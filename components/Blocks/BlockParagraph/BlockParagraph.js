import React from "react";
import Link from "next/link";
import parse from "html-react-parser";

function BlockParagraph({ align, anchor, content }) {
  return (
    <p className={`text-gray-300 mb-4
    ${align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left" }`}>
      {parse(content, {
        replace: (domNode) => {
          if (domNode.name === "a") {
            return (
              <Link href={domNode.attribs.href}>
                {domNode.children[0]?.data}
              </Link>
            );
          }
        },
      })}
    </p>
  );
}

export default BlockParagraph;
