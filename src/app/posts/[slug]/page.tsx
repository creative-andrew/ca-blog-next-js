import React from "react";
import Tags from "@/components/Tags/Tags";
import Date from "@/components/Date/Date";
import Blocks from "@/components/Blocks/Blocks";
import fetchClient from "@/fetch-client";
import postBySlugQuery, { PostBySlugResponse } from "@/queries/postBySlugQuery";
import postsQuery from "@/queries/postsQuery";
import { previewData } from "next/headers";
import previewPost, {
  PreviewPostDataInterface,
} from "@/queries/previewPageorPost";

const postBySlug = (slug, previewPostData: PreviewPostDataInterface = null) => {
  if (!previewPostData)
    fetchClient<PostBySlugResponse>({
      query: postBySlugQuery,
      variables: { id: slug },
      nextCache: { revalidate: 10 },
    });
  else {
    fetchClient({
      query: previewPost(previewPostData.data.post_type),
      variables: { id: previewPostData.data.id },
      authRequest: true,
    });
  }
};

async function SinglePost({ params }) {
  const previewPostData = previewData();
  const { data: post } = await postBySlug(params.slug);
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

export async function generateStaticParams() {
  const {
    data: {
      posts: { nodes: posts },
    },
  } = await fetchClient({ query: postsQuery, nextCache: { revalidate: 10 } });
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default SinglePost;
