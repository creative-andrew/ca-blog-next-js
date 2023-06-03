import { draftMode } from "next/headers";
import { Fragment } from "react";
import Link from "next/link";
export default function PostLayout({ children }) {
  const { isEnabled } = draftMode();
  return (
    <Fragment>
      {isEnabled && (
        <Link
          className="bg-red-700 text-gray-50 rounded p-2 mb-5 inline-block"
          href="/api/exit-preview"
        >
          Click to Exit Preview Mode
        </Link>
      )}
      {children}
    </Fragment>
  );
}
