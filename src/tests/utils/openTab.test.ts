import openTab from "@utils/openTab.ts";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

describe("openTab", () => {
  beforeEach(() => {
    global.chrome = {
      tabs: {
        create: vi.fn(),
      },
    } as unknown as typeof chrome;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should open a new tab with the given URL", () => {
    const url = "https://youtube.com";
    openTab(url);

    expect(chrome.tabs.create).toHaveBeenCalledWith({ url });
    expect(chrome.tabs.create).toHaveBeenCalledTimes(1);
  });
});
