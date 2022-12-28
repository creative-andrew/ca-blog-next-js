import React from "react";
import Link from "next/link";

export interface NavigationLinkInterface {
  uri: string;
  label: string;
  id: string;
}

interface NavigationLinkProps {
  link: NavigationLinkInterface;
  handleClick: () => void;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({
  link,
  handleClick,
}) => {
  return (
    <li className="pb-3 text-gray-200 hover:text-gray-100">
      <Link onClick={handleClick} href={link.uri}>
        {link.label}
      </Link>
    </li>
  );
};

export default NavigationLink;
