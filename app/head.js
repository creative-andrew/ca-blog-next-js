import fetchClient from "./fetch-client";
import headerAndMenus from "../lib/queries/headerAndMenusQuery";

const getHeaderAndMenus = async () => {
  const res = await fetchClient(headerAndMenus);
  return res;
};


async function Head() {
  const {
    data: { generalSettings },
  } = await getHeaderAndMenus();
  return (
    <>
      <title>{generalSettings?.title}</title>
      <meta name="description" content={generalSettings?.description}/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}


export default Head;