async function fetchClient(query = "", variables = {}, cachePolicy = {}) {
  const res = await fetch(
    "http://cablogwordpress.local/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    },
    cachePolicy
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default fetchClient;
