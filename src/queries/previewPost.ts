import { PostInterface } from "./postBySlugQuery";

export interface PreviewPostResponse {
  post: {
    slug: string;
    preview: {
      node: PostInterface;
    };
  };
}
const previewPost = (postType) =>
  `
query previewPageOrPost($id: ID!) {
    ${postType}(id: $id, idType: DATABASE_ID) {
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
export default previewPost;
