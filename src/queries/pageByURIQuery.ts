export interface PageByURIQueryResponse {
  page: {
    title: string;
    blocksJSON: string;
  };
}

const pageByURIQuery = `
query pageByURI($id: ID!) {
  page(id: $id, idType: URI) {
    title
    blocksJSON
  }
}
`;
export default pageByURIQuery;
