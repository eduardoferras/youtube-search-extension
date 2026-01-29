/**
 * Builds a YouTube search URL using the provided query.
 * @param {string} query - The search term to look up on YouTube.
 * @returns {string} The YouTube search URL.
 */
export default function getYoutubeSearchUrl(query: string): string {
  const encodedQuery = encodeURIComponent(query);
  return `https://www.youtube.com/results?search_query=${encodedQuery}`;
}
