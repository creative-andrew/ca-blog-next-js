import React from "react";
import Blocks from "../components/Blocks/Blocks";
import BlogPostList from "../components/BlogPostList/BlogPostList";
import pageByURIQuery, {
  PageByURIQueryResponse,
} from "../queries/pageByURIQuery";
import fetchClient from "../fetch-client";

const getPageByURI = async () => {
  const res = await fetchClient<PageByURIQueryResponse>({
    query: pageByURIQuery,
    variables: { id: "/home" },
    nextCache: { revalidate: 10 },
  });

  return res;
};

const Home = async () => {
  const {
    data: { page: page },
  } = await getPageByURI();
  return (
    <div className="flex flex-wrap flex-col-reverse md:block">
      <Blocks blocks={JSON.parse(page.blocksJSON)} />
      {/* @ts-ignore */}
      <BlogPostList />
    </div>
  );
};

export default Home;
