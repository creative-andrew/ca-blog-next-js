export interface BlogPostListArticlesResponse {
  posts: {
    nodes: {
      slug: string;
      id: string;
      title: string;
      date: string;
      excerpt: string;
      tags: {
        nodes: {
          name: string;
        }[];
      };
      seo: {
        title: string;
        metaDesc?: string;
      };
    }[];
  };
}

const postsQuery = `
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
`;

export default postsQuery;
