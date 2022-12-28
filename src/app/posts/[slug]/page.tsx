import React from "react";
import Tags from "@/components/Tags/Tags";
import Date from "@/components/Date/Date";
import Blocks from "@/components/Blocks/Blocks";
import fetchClient from "@/fetch-client";
import postBySlugQuery, {
  PostBySlugResponse,
  PostInterface,
} from "@/queries/postBySlugQuery";
import postsQuery, { BlogPostListArticlesResponse } from "@/queries/postsQuery";
import { previewData } from "next/headers";
import previewPost, { PreviewPostResponse } from "@/queries/previewPageorPost";

const postBySlug = async (
  slug: string,
  previewPostData = null
): Promise<PostInterface> => {
  let postData;
  if (!previewPostData) {
    const {
      data: { post },
    } = await fetchClient<PostBySlugResponse>({
      query: postBySlugQuery,
      variables: { id: slug },
      nextCache: { revalidate: 10 },
    });
    postData = post;
  } else {
    const {
      data: {
        post: {
          preview: { node },
        },
      },
    } = await fetchClient<PreviewPostResponse>({
      query: previewPost(previewPostData.data.post_type),
      variables: { id: previewPostData.data.id },
      authRequest: true,
    });
    postData = node;
  }
  return postData;
};

async function SinglePost({ params }) {
  const previewPostData = previewData();
  const { title, date, tags, blocksJSON } = await postBySlug(
    params.slug,
    previewPostData
  );
  return (
    <section>
      <h2 className="text-gray-50 text-3xl pb-3">{title}</h2>
      <div className="flex flex-wrap gap-2 items-center pt-2 pb-6 text-sm">
        <Date dateString={date} />
        {tags?.nodes && <Tags tags={tags?.nodes} />}
      </div>
      <Blocks blocks={JSON.parse(blocksJSON)} />
    </section>
  );
}

export async function generateStaticParams() {
  const {
    data: {
      posts: { nodes: posts },
    },
  } = await fetchClient<BlogPostListArticlesResponse>({
    query: postsQuery,
    nextCache: { revalidate: 10 },
  });
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default SinglePost;
