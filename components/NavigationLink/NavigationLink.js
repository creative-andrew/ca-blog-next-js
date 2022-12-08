import React from "react";
import Link from "next/link";

function NavigationLink({link, handleClick}) {
  return (
    <li className="pb-3 text-gray-200 hover:text-gray-100">
      <Link onClick={handleClick} href={link.uri}>{link.label}</Link>
    </li>
  );
}

export default NavigationLink;
