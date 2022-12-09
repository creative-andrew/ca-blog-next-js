async function fetchClient(options = {}) {
  const { query, variables, cachePolicy, nextCache } = options;
  const res = await fetch(`http://${process.env.WORDPRESS_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    cache: cachePolicy,
    next: nextCache,
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default fetchClient;
