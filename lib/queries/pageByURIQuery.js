const pageByURIQuery = `
query pageByURI($id: ID!) {
  page(id: $id, idType: URI) {
    title
    blocksJSON
  }
}
`
;

export default pageByURIQuery;