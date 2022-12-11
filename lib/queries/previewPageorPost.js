const previewPageOrPost = ($post_type) =>
  `
query previewPageOrPost($id: ID!) {
    ${$post_type}(id: $id, idType: DATABASE_ID) {
        slug
        preview {
            node {
              title
              blocksJSON
              date
              tags {
                nodes {
                  name
                }
              }
            }
        }
    }
  }
`;
export default previewPageOrPost;
