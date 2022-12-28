export interface PostInterface {
  title: string;
  blocksJSON: string;
  date: string;
  tags: {
    nodes: {
      name;
    }[];
  };
}

export interface PostBySlugResponse {
  post: PostInterface;
}

const postBySlug = `
query postBySlug($id: ID!) {
    post(id: $id, idType: SLUG) {
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
`;
export default postBySlug;
