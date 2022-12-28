import fetchClient from "../fetch-client";
import headerAndMenus, {
  GetHeaderAndMenusResponse,
} from "../queries/headerAndMenusQuery";
import Seo from "../components/Seo/Seo";

const getHeaderAndMenus = async () => {
  const res = await fetchClient<GetHeaderAndMenusResponse>({
    query: headerAndMenus,
    nextCache: { revalidate: 10 },
  });
  return res;
};

const Head = async () => {
  const {
    data: {
      generalSettings: { title, description },
    },
  } = await getHeaderAndMenus();
  return <Seo title={title} description={description} />;
};

export default Head;
