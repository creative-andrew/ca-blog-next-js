import React from "react";
import Blocks from "../../../components/Blocks/Blocks";
import fetchClient from "../../fetch-client";
import postBySlugQuery from "../../../lib/queries/postBySlugQuery";
const postBySlug = (slug) =>
  fetchClient(postBySlugQuery,
    {
      id: slug,
    }
  );

async function SinglePost({ params }) {
  const {
    data: { post },
  } = await postBySlug(params.slug);
  return (
    <section>
      <h2 className="text-gray-50 text-3xl pb-5">{post.title}</h2>
      <Blocks blocks={JSON.parse(post.blocksJSON)}/>
    </section>
  );
}

export default SinglePost;
