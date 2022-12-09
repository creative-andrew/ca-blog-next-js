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
