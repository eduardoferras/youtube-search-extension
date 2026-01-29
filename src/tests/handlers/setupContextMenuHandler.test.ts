import { YOUTUBE_CONTEXT_MENU_ID } from "@constants/contextMenu.ts";
import setupContextMenuHandler from "@handlers/setupContextMenuHandler.ts";
import getYoutubeSearchUrl from "@utils/getYoutubeSearchUrl.ts";
import openTab from "@utils/openTab.ts";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/utils/getYoutubeSearchUrl", () => ({
  default: vi.fn(
    (text: string) => `https://youtube.com/results?search_query=${text}`,
  ),
}));

vi.mock("@/utils/openTab", () => ({
  default: vi.fn(),
}));

describe("setupContextMenuHandler", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    global.chrome = {
      contextMenus: {
        onClicked: {
          addListener: vi.fn(),
        },
      },
    } as unknown as typeof chrome;
  });

  it("should register the context menu listener", () => {
    setupContextMenuHandler();
    expect(chrome.contextMenus.onClicked.addListener).toHaveBeenCalled();
  });

  it("should call getYoutubeSearchUrl and openTab", () => {
    setupContextMenuHandler();

    const listener = (
      chrome.contextMenus.onClicked.addListener as ReturnType<typeof vi.fn>
    ).mock.calls[0][0];

    const mockInfo = {
      menuItemId: YOUTUBE_CONTEXT_MENU_ID,
      selectionText: "Vitest tutorial",
    };

    listener(mockInfo);

    expect(getYoutubeSearchUrl).toHaveBeenCalledWith("Vitest tutorial");
    expect(openTab).toHaveBeenCalledWith(
      "https://youtube.com/results?search_query=Vitest tutorial",
    );
  });

  it("should not call getYoutubeSearchUrl or openTab if selectionText is empty", () => {
    setupContextMenuHandler();

    const listener = (
      chrome.contextMenus.onClicked.addListener as ReturnType<typeof vi.fn>
    ).mock.calls[0][0];

    const mockInfo = {
      menuItemId: YOUTUBE_CONTEXT_MENU_ID,
      selectionText: "",
    };

    listener(mockInfo);

    expect(getYoutubeSearchUrl).not.toHaveBeenCalled();
    expect(openTab).not.toHaveBeenCalled();
  });

  it("should not call getYoutubeSearchUrl or openTab if menuItemId is not YOUTUBE_CONTEXT_MENU_ID", () => {
    setupContextMenuHandler();

    const listener = (
      chrome.contextMenus.onClicked.addListener as ReturnType<typeof vi.fn>
    ).mock.calls[0][0];

    const mockInfo = {
      menuItemId: "OUTRO_ID",
      selectionText: "Vitest tutorial",
    };

    listener(mockInfo);

    expect(getYoutubeSearchUrl).not.toHaveBeenCalled();
    expect(openTab).not.toHaveBeenCalled();
  });
});
