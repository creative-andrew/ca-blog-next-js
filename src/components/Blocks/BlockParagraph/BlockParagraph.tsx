import React from "react";
import Link from "next/link";
import parse, { Element, domToReact } from "html-react-parser";
function BlockParagraph({ align, anchor, content }) {
  return (
    <p
      className={`text-gray-300 mb-4
    ${
      align === "center"
        ? "text-center"
        : align === "right"
        ? "text-right"
        : "text-left"
    }`}
    >
      {parse(content, {
        replace: (domNode: Element) => {
          if (domNode.name === "a") {
            return (
              <Link
                target={domNode?.attribs?.target}
                href={domNode?.attribs?.href}
              >
                {domToReact(domNode.children)}
              </Link>
            );
          }
        },
      })}
    </p>
  );
}

export default BlockParagraph;
