import React from "react";
import BlogPostListItem from "../BlogPostListItem/BlogPostListItem";
import fetchClient from "../../app/fetch-client";
import postsQuery from "../../lib/queries/postsQuery";

const BlogPostListArticles = () =>
  fetchClient({ query: postsQuery, nextCache: { revalidate: 10 } });

async function BlogPostList() {
  const {
    data: {
      posts: { nodes: posts },
    },
  } = await BlogPostListArticles();

  return (
    <section>
      {posts.map((post) => (
        <BlogPostListItem key={post.id} post={post} />
      ))}
    </section>
  );
}

export default BlogPostList;
