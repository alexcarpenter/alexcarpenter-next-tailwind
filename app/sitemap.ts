export default async function sitemap() {
  const routes = ["", "/posts", "/bookmarks"].map((route) => ({
    url: `https://alexcarpenter.me${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
