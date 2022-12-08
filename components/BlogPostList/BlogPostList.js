import React from "react";
import BlogPostListItem from "../BlogPostListItem/BlogPostListItem";
import fetchClient from "../../app/fetch-client";

const BlogPostListArticles = () => fetchClient(`
query BlogPostListArticles {
  posts {
    nodes {
      slug
      id
      title
      date
      excerpt
      tags {
        nodes {
          name
        }
      }
    }
  }
}
`);

async function BlogPostList() {

  const { data: { posts: { nodes: posts} } } = await BlogPostListArticles();

  return (
    <section>
      {posts.map((post) => (
        <BlogPostListItem key={post.id} post={post} />
      ))}
    </section>
  );
}

export default BlogPostList;
