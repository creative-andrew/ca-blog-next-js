import React from "react";
import Tags from "../../../components/Tags/Tags";
import Date from "../../../components/Date/Date";
import Blocks from "../../../components/Blocks/Blocks";
import fetchClient from "../../fetch-client";
import postBySlugQuery from "../../../lib/queries/postBySlugQuery";
const postBySlug = (slug) =>
  fetchClient({
    query: postBySlugQuery,
    variables: { id: slug },
    nextCache: { revalidate: 10 },
  });

async function SinglePost({ params }) {
  const {
    data: { post },
  } = await postBySlug(params.slug);
  return (
    <section>
      <h2 className="text-gray-50 text-3xl pb-3">{post?.title}</h2>
      <div className="flex flex-wrap gap-2 items-center pt-2 pb-6 text-sm">
        <Date dateString={post?.date} />
        {post?.tags?.nodes && <Tags tags={post?.tags?.nodes} />}
      </div>
      <Blocks blocks={JSON.parse(post?.blocksJSON)} />
    </section>
  );
}

export default SinglePost;
