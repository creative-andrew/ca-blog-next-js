import React from "react";
import { notFound } from "next/navigation";
import Tags from "@/components/Tags/Tags";
import Date from "@/components/Date/Date";
import Blocks from "@/components/Blocks/Blocks";
import fetchClient from "@/fetch-client";
import postBySlugQuery, { PostBySlugResponse } from "@/queries/postBySlugQuery";
import postsQuery, { BlogPostListArticlesResponse } from "@/queries/postsQuery";
import { draftMode } from "next/headers";

const getPostBySlug = async (slug: string) => {
  const { isEnabled } = draftMode();
  const {
    data: { post },
  } = await fetchClient<PostBySlugResponse>({
    query: postBySlugQuery(!!isEnabled),
    variables: { id: slug },
    authRequest: isEnabled ? true : undefined,
    cachePolicy: isEnabled ? "no-store" : undefined,
  });

  return post?.preview ? post.preview?.node : post;
};

async function SinglePost({ params }) {
  const post = await getPostBySlug(params.slug);

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

export async function generateMetadata({ params }) {
  const {
    data: {
      post: {
        // @ts-ignore
        seo: { title, metaDesc },
      },
    },
  } = await fetchClient<PostBySlugResponse>({
    query: postBySlugQuery(),
    variables: { id: params.slug },
    nextCache: { revalidate: 10 },
  });

  return {
    title,
    description: metaDesc,
  };
}

export default SinglePost;
