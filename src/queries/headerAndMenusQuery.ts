export interface GetHeaderAndMenusResponse {
  generalSettings: {
    description: string;
    title: string;
  };
  menu: {
    menuItems: {
      nodes: {
        uri: string;
        id: string;
        label: string;
      }[];
    };
  };
}

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
