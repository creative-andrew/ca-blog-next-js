async function fetchClient(options = {}) {
  const { query, variables, cachePolicy, nextCache, authRequest } = options;

  const headers = {
    "Content-Type": "application/json",
  }

  if (authRequest && process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }

  const res = await fetch(`http://${process.env.WORDPRESS_URL}/graphql`, {
    method: "POST",
    headers,
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
