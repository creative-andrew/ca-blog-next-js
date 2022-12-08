const headerAndMenus = `
query HeaderAndMenus {
  generalSettings {
    description
    title
  }
  menu(id: "main", idType: SLUG) {
    menuItems {
      nodes {
        uri
        id
        label
      }
    }
  }
}
`;

export default headerAndMenus;