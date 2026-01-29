import getYoutubeSearchUrl from "@utils/getYoutubeSearchUrl.ts";
import { describe, expect, it } from "vitest";

describe("getYoutubeSearchUrl", () => {
  it("should return correct YouTube search URL for a simple query", () => {
    const query = "test video";
    const expectedUrl =
      "https://www.youtube.com/results?search_query=test%20video";
    expect(getYoutubeSearchUrl(query)).toBe(expectedUrl);
  });

  it("should handle special characters in the query", () => {
    const query = "C++ programming";
    const expectedUrl =
      "https://www.youtube.com/results?search_query=C%2B%2B%20programming";
    expect(getYoutubeSearchUrl(query)).toBe(expectedUrl);
  });

  it("should handle queries with symbols", () => {
    const query = "rock & roll";
    const expectedUrl =
      "https://www.youtube.com/results?search_query=rock%20%26%20roll";
    expect(getYoutubeSearchUrl(query)).toBe(expectedUrl);
  });

  it("should handle queries with non-ASCII characters", () => {
    const query = "你好";
    const expectedUrl =
      "https://www.youtube.com/results?search_query=%E4%BD%A0%E5%A5%BD";
    expect(getYoutubeSearchUrl(query)).toBe(expectedUrl);
  });
});
