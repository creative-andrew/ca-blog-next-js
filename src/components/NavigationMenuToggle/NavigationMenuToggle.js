import React from "react";

function NavigationMenuToggle({ handleClick, open }) {
  return (
    <button
      onClick={handleClick}
      className="text-gray-200 text-3xl absolute top-0 right-0 md:hidden"
    >
      {!open ? "☰" : "×"}
    </button>
  );
}

export default NavigationMenuToggle;
