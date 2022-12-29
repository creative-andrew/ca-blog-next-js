import React from "react";
import { notFound } from "next/navigation";
import Tags from "@/components/Tags/Tags";
import Date from "@/components/Date/Date";
import Blocks from "@/components/Blocks/Blocks";
import fetchClient from "@/fetch-client";
import postBySlugQuery, { PostBySlugResponse } from "@/queries/postBySlugQuery";
import postsQuery, { BlogPostListArticlesResponse } from "@/queries/postsQuery";
import { previewData } from "next/headers";

const getPostBySlug = async (slug: string, previewPostData = null) => {
  const {
    data: { post },
  } = await fetchClient<PostBySlugResponse>({
    query: postBySlugQuery(!!previewPostData),
    variables: { id: previewPostData ? previewPostData.data.slug : slug },
    authRequest: previewPostData ? true : undefined,
  });

  return post?.preview ? post.preview?.node : post;
};

async function SinglePost({ params }) {
  const previewPostData = previewData();
  const post = await getPostBySlug(params.slug, previewPostData);

  if (!post) {
    notFound();
  }

  const { title, date, tags, blocksJSON } = post;

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
