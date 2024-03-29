import Link from "next/link";
import React from "react";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import fetchClient from "../../fetch-client";
import headerAndMenus, {
  GetHeaderAndMenusResponse,
} from "../../queries/headerAndMenusQuery";

const getHeaderAndMenus = async () => {
  const res = await fetchClient<GetHeaderAndMenusResponse>({
    query: headerAndMenus,
  });
  return res;
};

// @ts-ignore
const Header: React.FC = async () => {
  const {
    data: {
      generalSettings,
      menu: { menuItems },
    },
  } = await getHeaderAndMenus();

  return (
    <header className="relative w-auto md:w-72 md:border-r md:border-r-gray-800 md:pr-3">
      <h1 className="text-gray-50 text-2xl font-normal pb-3">
        <Link
          href="/"
          dangerouslySetInnerHTML={{ __html: generalSettings?.title }}
        ></Link>
      </h1>
      <p className="text-gray-400 font-light">{generalSettings?.description}</p>
      <NavigationMenu links={menuItems?.nodes} />
    </header>
  );
};

export default Header;
