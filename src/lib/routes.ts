export function getSeriesSlug(id: string) {
  return id.split("/")[0];
}

export function getSeriesPostSlug(id: string) {
  return id.split("/")[1];
}

export function getBlogPostHref(id: string) {
  return `/blog/${id}`;
}

export function getSeriesHref(seriesId: string) {
  return `/series/${getSeriesSlug(seriesId)}`;
}

export function getSeriesPostHref(postId: string) {
  const seriesSlug = getSeriesSlug(postId);
  const postSlug = getSeriesPostSlug(postId);

  return `/series/${seriesSlug}/${postSlug}`;
}
