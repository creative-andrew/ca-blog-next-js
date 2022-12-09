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
`
;

export default postBySlug;