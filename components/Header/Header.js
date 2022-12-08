import Link from "next/link";
import {React, dangerouslySetInnerHTML} from "react";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import fetchClient from "../../app/fetch-client";
import headerAndMenus from "../../lib/queries/headerAndMenusQuery";

const getHeaderAndMenus = async () => {
  const res = await fetchClient(headerAndMenus);
  return res;
};

async function Header() {
  const {
    data: { generalSettings, menu: { menuItems} },
  } = await getHeaderAndMenus();

  return (
    <header className="relative w-auto md:w-72 md:border-r md:border-r-gray-800 md:pr-3">
      <h1 className="text-gray-50 text-2xl font-normal pb-3">
        <Link href="/" dangerouslySetInnerHTML={{__html:generalSettings?.title}}></Link>
      </h1>
      <p className="text-gray-400 font-light">{generalSettings?.description}</p>
      <NavigationMenu links={menuItems?.nodes} />
    </header>
  );
}

export default Header;
