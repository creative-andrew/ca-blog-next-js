const postBySlug = `
query postBySlug($id: ID!) {
    post(id: $id, idType: SLUG) {
      title
      blocksJSON
    }
  }
`
;

export default postBySlug;