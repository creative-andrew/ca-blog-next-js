export interface PostBySlugResponse {
  post: Post | null;
}

export interface Post {
  title: string;
  blocksJSON: string;
  date: string;
  tags: {
    nodes: {
      name: string;
    }[];
  };
  preview?: {
    node: Post;
  };
}

const postBySlugQuery = (isPreview: boolean) => `
query getPostBySlug($id: ID!) {
    post(id: $id, idType: SLUG) {
      ${
        isPreview
          ? `preview {
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
            }`
          : `title
            blocksJSON
            date
            tags {
              nodes {
                name
              }
            }`
      }
    }
  }
`;
export default postBySlugQuery;
