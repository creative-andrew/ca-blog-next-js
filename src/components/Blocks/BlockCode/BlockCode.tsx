"use client";

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import {decode} from 'html-entities';
function BlockCode({ language, code }) {
  return (
    <div className="bg-slate-800 p-4 rounded mb-5">
      <span className="block pb-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="14"
          viewBox="0 0 54 14"
        >
          <g fill="none" fillRule="evenodd" transform="translate(1 1)">
            <circle
              cx="6"
              cy="6"
              r="6"
              fill="#FF5F56"
              stroke="#E0443E"
              strokeWidth=".5"
            ></circle>
            <circle
              cx="26"
              cy="6"
              r="6"
              fill="#FFBD2E"
              stroke="#DEA123"
              strokeWidth=".5"
            ></circle>
            <circle
              cx="46"
              cy="6"
              r="6"
              fill="#27C93F"
              stroke="#1AAB29"
              strokeWidth=".5"
            ></circle>
          </g>
        </svg>
      </span>
      <SyntaxHighlighter
        language={language}
        wrapLongLines={true}
        wrapLines={true}
        lineProps={{style: {wordBreak: 'break-word'}}}
        style={nord}
        customStyle={{
          fontFamily: "inherit",
          background: "rgb(31 41 59 / var(--tw-bg-opacity))",
          padding: 0
        }}
      >
        {decode(code)}
      </SyntaxHighlighter>
    </div>
  );
}

export default BlockCode;
