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
  seo: {
    title: string;
    metaDesc?: string;
  };
}

const postBySlugQuery = (isEnabled: boolean = false) => `
query getPostBySlug($id: ID!) {
    post(id: $id, idType: SLUG) {
      ${
        isEnabled
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
            seo {
              title
              metaDesc
            }
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
