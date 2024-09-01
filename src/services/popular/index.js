export const getPosts = async (url) => {
  const res = (await fetch(url));
  return await res.json();
}

export const getPostsParams = async (url, urlName, urlParams) => {
  const res = (await fetch(url));
  url.setItem(urlName ,urlParams);
  return await res.json();
}