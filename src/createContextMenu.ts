import { YOUTUBE_CONTEXT_MENU_ID } from "@constants/contextMenu.ts";

export default function createContextMenu() {
  chrome.contextMenus.create(
    {
      id: YOUTUBE_CONTEXT_MENU_ID,
      title: chrome.i18n.getMessage("contextMenuTitle", ["%s"]),
      contexts: ["selection"],
    },
    () => {
      if (chrome.runtime.lastError) {
        console.error(
          chrome.i18n.getMessage(
            "contextMenuError",
            chrome.runtime.lastError.message,
          ),
        );
      }
    },
  );
}
