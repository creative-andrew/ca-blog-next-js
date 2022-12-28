import React from "react";
import BlogPostListItem from "../BlogPostListItem/BlogPostListItem";
import fetchClient from "../../fetch-client";
import postsQuery, {
  BlogPostListArticlesResponse,
} from "../../queries/postsQuery";

const BlogPostListArticles = () =>
  fetchClient<BlogPostListArticlesResponse>({
    query: postsQuery,
    nextCache: { revalidate: 10 },
  });

const BlogPostList = async ():((as unknown) as React.FC) => {
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
} ;

export default BlogPostList;
