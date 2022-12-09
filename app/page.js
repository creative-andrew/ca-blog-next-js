import React from "react";
import Blocks from "../components/Blocks/Blocks";
import BlogPostList from "../components/BlogPostList/BlogPostList";
import pageByURIQuery from "../lib/queries/pageByURIQuery";
import fetchClient from "./fetch-client";

const getPageByURI = async () => {
  const res = await fetchClient({
    query: pageByURIQuery,
    variables: { id: "/home" },
  });
  return res;
};

async function Home() {
  const {
    data: { page: page },
  } = await getPageByURI();
  return (
    <div className="flex flex-wrap flex-col-reverse md:block">
      <Blocks blocks={JSON.parse(page.blocksJSON)} />
      <BlogPostList />
    </div>
  );
}

export default Home;
