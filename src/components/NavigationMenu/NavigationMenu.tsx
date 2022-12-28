"use client";

import React, { useState } from "react";
import NavigationLink, {
  NavigationLinkInterface,
} from "../NavigationLink/NavigationLink";
import NavigationMenuToggle from "../NavigationMenuToggle/NavigationMenuToggle";

interface NavigationMenuLinksProps {
  links: NavigationLinkInterface[];
}

const NavigationMenu: React.FC<NavigationMenuLinksProps> = ({ links }) => {
  function handleClick() {
    setOpen(!open);
  }
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavigationMenuToggle handleClick={handleClick} open={open} />
      <nav className={`${open ? "block" : "hidden"} pt-8 md:block`}>
        <ul>
          {links.map((link) => (
            <NavigationLink
              handleClick={handleClick}
              key={link.id}
              link={link}
            />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavigationMenu;
