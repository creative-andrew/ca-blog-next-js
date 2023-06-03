import postsQuery, { BlogPostListArticlesResponse } from "@/queries/postsQuery";
import fetchClient from "@/fetch-client";

const URL = process.env.NEXT_STATIC_BLOG_URL;

export default async function sitemap() {
  const {
    data: {
      posts: { nodes: posts },
    },
  } = await fetchClient<BlogPostListArticlesResponse>({
    query: postsQuery,
    nextCache: { revalidate: 10 },
  });
  const postsSlugs = posts.map(({ slug, date }) => ({
    url: `${URL}/posts/${slug}`,
    lastModified: date,
  }));

  const routes = [""].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts];
}
